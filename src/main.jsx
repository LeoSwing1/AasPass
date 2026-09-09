import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight, MapPin, Store, Bike, ShoppingBag, Search,
  ChevronRight, Menu, X, Check, Mail, Sparkles, MessageCircle, Handshake, CircleHelp
} from "lucide-react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const AAS_GREEN = "#16b957";
const DARK = "#071c18";
const WHATSAPP_NUMBER = "919266895814";
const whatsappLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function NetworkCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(DARK, 0.035);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setClearColor(0x000000, 0);

    const group = new THREE.Group();
    scene.add(group);

    // Neighbourhood nodes: shops, homes and delivery partners.
    const nodes = [];
    const nodeGeo = new THREE.SphereGeometry(0.065, 12, 12);
    const shopMat = new THREE.MeshBasicMaterial({ color: 0x36d978 });
    const homeMat = new THREE.MeshBasicMaterial({ color: 0x86f3b0 });
    const riderMat = new THREE.MeshBasicMaterial({ color: 0xffa82e });

    for (let i = 0; i < 34; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 2.0 + Math.random() * 3.3;
      const mesh = new THREE.Mesh(
        nodeGeo,
        i % 7 === 0 ? shopMat : (i % 9 === 0 ? riderMat : homeMat)
      );
      mesh.position.set(Math.cos(a) * r * 1.2, Math.sin(a) * r * 0.63, (Math.random() - .5) * 1.3);
      group.add(mesh);
      nodes.push(mesh);
    }

    // Connecting routes.
    const routeMat = new THREE.LineBasicMaterial({
      color: 0x1ac461, transparent: true, opacity: 0.16
    });
    const routes = [];
    for (let i = 0; i < nodes.length; i++) {
      let closest = null, dist = Infinity;
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        const d = nodes[i].position.distanceTo(nodes[j].position);
        if (d < dist && d < 2.0) { dist = d; closest = nodes[j]; }
      }
      if (closest) {
        const geo = new THREE.BufferGeometry().setFromPoints([
          nodes[i].position, closest.position
        ]);
        const line = new THREE.Line(geo, routeMat);
        group.add(line);
        routes.push(line);
      }
    }

    // Central AasPass "hub".
    const hub = new THREE.Mesh(
      new THREE.IcosahedronGeometry(.55, 2),
      new THREE.MeshBasicMaterial({ color: 0x16b957, wireframe: true, transparent: true, opacity: .55 })
    );
    group.add(hub);

    // Moving delivery pulse.
    const pulse = new THREE.Mesh(
      new THREE.SphereGeometry(.11, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    group.add(pulse);

    const routePoints = [
      new THREE.Vector3(-3.7, -1.2, .2),
      new THREE.Vector3(-2.0, -.55, .4),
      new THREE.Vector3(-.7, -.15, .5),
      new THREE.Vector3(.8, .25, .4),
      new THREE.Vector3(2.0, .55, .2),
      new THREE.Vector3(3.6, 1.15, 0)
    ];
    const curve = new THREE.CatmullRomCurve3(routePoints);

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const resize = () => {
      const w = canvas.clientWidth || canvas.parentElement.clientWidth;
      const h = canvas.clientHeight || canvas.parentElement.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth - .5) * 0.8;
      target.y = (e.clientY / window.innerHeight - .5) * 0.5;
    };
    window.addEventListener("pointermove", onMove);

    let raf;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouse.x += (target.x - mouse.x) * .035;
      mouse.y += (target.y - mouse.y) * .035;

      group.rotation.y = mouse.x * .18 + Math.sin(t * .08) * .05;
      group.rotation.x = -mouse.y * .10;
      hub.rotation.x = t * .22;
      hub.rotation.y = t * .3;
      hub.scale.setScalar(1 + Math.sin(t * 2.4) * .06);

      const p = (t * .07) % 1;
      pulse.position.copy(curve.getPoint(p));
      pulse.scale.setScalar(1 + Math.sin(t * 8) * .22);

      routes.forEach((r, i) => {
        r.material.opacity = .10 + (Math.sin(t * 1.2 + i) + 1) * .045;
      });

      renderer.render(scene, camera);
    };
    animate();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) group.rotation.y = 0;

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      renderer.dispose();
      nodeGeo.dispose();
      shopMat.dispose(); homeMat.dispose(); riderMat.dispose();
      routeMat.dispose(); hub.geometry.dispose(); hub.material.dispose();
      pulse.geometry.dispose(); pulse.material.dispose();
    };
  }, []);

  return <canvas ref={ref} className="network-canvas" aria-hidden="true" />;
}

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(el, { y: 34, opacity: 0 }, {
      y: 0, opacity: 1, duration: .8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 84%", once: true }
    });
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

const categories = [
  ["Kirana", "Daily essentials from the shop around you.", "01"],
  ["Food Stalls", "Your favourite local bites, ordered nearby.", "02"],
  ["Stationery", "The small things you need, close to home.", "03"],
  ["Electronics", "Accessories and essentials from local stores.", "04"]
];

function App() {
  const [menu, setMenu] = React.useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const items = gsap.utils.toArray(".story-card");
    items.forEach((el, i) => {
      gsap.fromTo(el, { y: 45, opacity: 0 }, {
        y: 0, opacity: 1, duration: .75, delay: i * .04, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      });
    });
  }, []);

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="AasPass home">
          <img src="/assets/aaspass-icon.png" alt="" />
          <span>Aas<span>Pass</span></span>
        </a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#how" onClick={() => setMenu(false)}>How it works</a>
          <a href="#shops" onClick={() => setMenu(false)}>For shops</a>
          <a href="#delivery" onClick={() => setMenu(false)}>Delivery partners</a>
          <a href="#network" onClick={() => setMenu(false)}>Our network</a>
          <a className="nav-cta" href="#join" onClick={() => setMenu(false)}>Join AasPass <ArrowUpRight size={16}/></a>
        </nav>
        <div className="nav-actions">
          <a className="nav-whatsapp" href={whatsappLink("Hi AasPass! I want to know more about the platform.")} target="_blank" rel="noreferrer" aria-label="Chat with AasPass on WhatsApp"><MessageCircle size={17}/> WhatsApp</a>
          <a className="nav-partner" href="#join" onClick={() => setMenu(false)}>Become a partner</a>
        </div>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X/> : <Menu/>}
        </button>
      </header>

      <section className="hero" id="top">
        <NetworkCanvas />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="eyebrow"><span className="live-dot"/> THE LOCAL NETWORK</div>
          <h1>What you need.<br/><em>Right around you.</em></h1>
          <p>
            AasPass brings neighbourhood shops, customers and local delivery partners together —
            making everyday commerce feel close again.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#how">Discover AasPass <ArrowUpRight size={18}/></a>
            <a className="btn ghost" href="#shops">I'm a local business <ChevronRight size={18}/></a>
          </div>
          <div className="hero-note"><MapPin size={15}/> Built around the neighbourhood</div>
        </div>
        <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="statement">
        <Reveal>
          <p className="kicker">THE IDEA</p>
          <h2>Why go far when your neighbourhood already has <span>what you need?</span></h2>
        </Reveal>
        <Reveal className="statement-grid">
          <p>From the kirana shop you have known for years to the food stall around the corner, AasPass puts local businesses within easy digital reach.</p>
          <p>Order nearby. Support nearby. Let someone from the neighbourhood bring it to your door.</p>
        </Reveal>
      </section>

      <section className="how" id="how">
        <div className="section-head">
          <Reveal><p className="kicker">HOW IT WORKS</p><h2>Three simple moves.<br/><span>One local loop.</span></h2></Reveal>
        </div>
        <div className="steps">
          <Reveal className="step">
            <div className="step-num">01</div>
            <Store size={25}/>
            <h3>Find a local shop</h3>
            <p>See businesses around your neighbourhood and discover what is available nearby.</p>
          </Reveal>
          <div className="connector">→</div>
          <Reveal className="step">
            <div className="step-num">02</div>
            <ShoppingBag size={25}/>
            <h3>Place your order</h3>
            <p>Choose what you need, confirm your order and let the shop prepare it.</p>
          </Reveal>
          <div className="connector">→</div>
          <Reveal className="step">
            <div className="step-num">03</div>
            <Bike size={25}/>
            <h3>Get it locally</h3>
            <p>A nearby delivery partner picks it up and brings it to your home.</p>
          </Reveal>
        </div>
      </section>

      <section className="showcase" id="shops">
        <div className="showcase-copy">
          <Reveal>
            <p className="kicker">FOR LOCAL SHOPS</p>
            <h2>Your shop deserves <span>your neighbourhood.</span></h2>
            <p className="lead">AasPass helps local businesses get discovered, receive digital orders and keep serving the people closest to them.</p>
            <ul>
              <li><Check size={17}/> Reach nearby customers</li>
              <li><Check size={17}/> Manage orders digitally</li>
              <li><Check size={17}/> Build your local presence</li>
              <li><Check size={17}/> Keep commerce close</li>
            </ul>
            <div className="partner-actions">
              <a className="text-link" href={whatsappLink("Hi AasPass! I am a local vendor and want to become an AasPass partner.")} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Become a vendor <ArrowUpRight size={17}/></a>
              <a className="text-link secondary" href="mailto:hello.aaspass@gmail.com?subject=Become%20an%20AasPass%20Partner"><Mail size={17}/> Email us <ArrowUpRight size={17}/></a>
            </div>
          </Reveal>
        </div>
        <Reveal className="vendor-card">
          <div className="mock-top"><span className="mock-dot"/><span className="mock-title">AasPass Partner</span><span className="mock-more">•••</span></div>
          <div className="mock-welcome">Good evening, <b>Lala Ji</b></div>
          <div className="mock-order"><div><small>NEW ORDER</small><strong>2 items · ₹68</strong></div><span className="accept">View</span></div>
          <div className="mock-order"><div><small>PREPARING</small><strong>4 items · ₹124</strong></div><span className="preparing">Preparing</span></div>
          <div className="mock-stat"><div><span>Today's orders</span><b>28</b></div><div><span>Local customers</span><b>114</b></div></div>
        </Reveal>
      </section>

      <section className="delivery" id="delivery">
        <div className="delivery-art">
          <div className="route-line"/>
          <div className="route-node shop-node"><Store/></div>
          <div className="route-node home-node"><MapPin/></div>
          <div className="rider"><Bike/></div>
          <div className="delivery-label shop-label">LOCAL SHOP</div>
          <div className="delivery-label home-label">YOUR HOME</div>
        </div>
        <div className="delivery-copy">
          <Reveal>
            <p className="kicker">FOR DELIVERY PARTNERS</p>
            <h2>Earn locally.<br/><span>Move locally.</span></h2>
            <p className="lead">Short-distance neighbourhood deliveries can create a simple local earning opportunity for people already moving around their area.</p>
            <div className="quote">“Local deliveries. Local distances. Local opportunity.”</div>
            <div className="partner-actions">
              <a className="btn primary" href={whatsappLink("Hi AasPass! I want to become a local delivery partner.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Join as delivery partner <ArrowUpRight size={18}/></a>
              <a className="btn outline-light" href="mailto:hello.aaspass@gmail.com?subject=Become%20an%20AasPass%20Delivery%20Partner"><Mail size={18}/> Email us</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="categories">
        <Reveal><p className="kicker">WHAT'S AROUND YOU</p><h2>Local has<br/><span>more to offer.</span></h2></Reveal>
        <div className="category-grid">
          {categories.map(([name, desc, num]) => (
            <article className="story-card" key={name}>
              <span>{num}</span><div className="category-icon"><Sparkles size={20}/></div>
              <h3>{name}</h3><p>{desc}</p><ArrowUpRight className="corner-arrow" size={19}/>
            </article>
          ))}
        </div>
      </section>

      <section className="network-section" id="network">
        <div className="network-inner">
          <NetworkCanvas />
          <Reveal className="network-copy">
            <p className="kicker">THE AASPASS NETWORK</p>
            <h2>Every shop.<br/>Every home.<br/><span>Connected locally.</span></h2>
            <p>One neighbourhood can become a living network — with local businesses at the centre and local people helping things move.</p>
          </Reveal>
        </div>
      </section>

      <section className="manifesto">
        <Reveal>
          <p className="kicker">THE BIG IDEA</p>
          <h2>Local isn't old-fashioned.<br/><span>It's the future.</span></h2>
          <img src="/assets/aaspass-logo.png" alt="AasPass — Jo chahiye, aas-paas se." />
        </Reveal>
      </section>

      <section className="brand-film">
        <div className="film-wrap">
          <video src="/assets/aaspass-brand-animation.mp4" controls playsInline muted poster="/assets/aaspass-logo.png" />
        </div>
        <Reveal><p className="film-caption">A small order. A nearby shop. A local delivery. <span>That's the AasPass loop.</span></p></Reveal>
      </section>

      <section className="join" id="join">
        <Reveal>
          <p className="kicker">START LOCAL</p>
          <h2>Let's make<br/><span>local stronger.</span></h2>
          <p>For customers, shops and delivery partners — AasPass is being built around the people already making neighbourhoods work.</p>
          <div className="join-actions">
            <a className="btn light" href={whatsappLink("Hi AasPass! I want to partner with you.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp us</a>
            <a className="btn light secondary-light" href="mailto:hello.aaspass@gmail.com"><Mail size={18}/> hello.aaspass@gmail.com</a>
          </div>
          <div className="quick-contact">
            <a href="#shops"><Handshake size={17}/> Vendor / Shop</a>
            <a href="#delivery"><Bike size={17}/> Delivery Partner</a>
            <a href={whatsappLink("Hi AasPass Support! I need help.")} target="_blank" rel="noreferrer"><CircleHelp size={17}/> Help on WhatsApp</a>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="footer-brand"><img src="/assets/aaspass-icon.png" alt=""/><div><strong>Aas<span>Pass</span></strong><small>Jo chahiye, aas-paas se.</small></div></div>
        <div className="footer-links"><a href="#how">How it works</a><a href="#shops">For vendors</a><a href="#delivery">Delivery partners</a><a href={whatsappLink("Hi AasPass! I need help.")} target="_blank" rel="noreferrer">Help / WhatsApp</a><a href="mailto:hello.aaspass@gmail.com">Email</a></div>
        <p className="copyright">© 2026 AasPass. Local shops. Local people. Local delivery.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

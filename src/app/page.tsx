"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {q:"What age do you accept?", a:"From 2 years (even if not toilet trained, we help). Up to 6 years for Top Class P1 prep. We assess each child gently."},
    {q:"Do you provide food?", a:"Yes! Millet porridge at 9am, lunch (rice, beans, matooke, meat twice a week) at 12pm, fruit. No junk. Clean safe water."},
    {q:"What about safety & health?", a:"Fenced compound, CCTV, locked gate, pickup ID card, first aid trained female staff, no corporal punishment, sick child policy."},
    {q:"Transport available?", a:"Yes, Iganga town routes with a matron in van. 50k per term for town centre, fuel adjusted for far villages."},
    {q:"Daycare after 12:30?", a:"Yes till 5:30pm. Nap mats, snacks, supervised play, homework help for Top. 20k daily or 300k termly add-on."},
    {q:"What is needed to enroll?", a:"Child immunization card, birth certificate copy, 2 passport photos, parent ID, registration 30k. Forms at school or via WhatsApp."},
  ];

  return (
    <main className="bg-[#FFFDF7] overflow-x-hidden text-[#1E3A8A]">
      {/* HEADER WITH MOBILE MENU */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD93D] flex items-center justify-center shadow">☀️</div>
            <div className="leading-none"><p className="font-black text-[18px]">TotoShine</p><p className="text-[9px] font-bold tracking-widest text-gray-400 mt-1">NURSERY • IGANGA</p></div>
          </div>
          <nav className="hidden lg:flex gap-7 text-[13px] font-bold">
            <a href="#about" className="hover:text-[#EC4899]">About</a>
            <a href="#facilities" className="hover:text-[#EC4899]">Facilities</a>
            <a href="#programs" className="hover:text-[#EC4899]">Programs</a>
            <a href="#gallery" className="hover:text-[#EC4899]">Gallery</a>
            <a href="#fees" className="hover:text-[#EC4899]">Fees</a>
            <a href="#contact" className="hover:text-[#EC4899]">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/256700123456" className="hidden md:block bg-[#22C55E] text-white px-5 py-2.5 rounded-full font-bold text-[13px]">WhatsApp Us</a>
            <button onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 bg-[#1E3A8A] text-white rounded-full font-bold">☰</button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-3 text-[14px] font-bold">
            <a onClick={()=>setMenuOpen(false)} href="#about" className="block">About</a>
            <a onClick={()=>setMenuOpen(false)} href="#facilities" className="block">Facilities</a>
            <a onClick={()=>setMenuOpen(false)} href="#programs" className="block">Programs</a>
            <a onClick={()=>setMenuOpen(false)} href="#gallery" className="block">Gallery</a>
            <a onClick={()=>setMenuOpen(false)} href="#fees" className="block">Fees</a>
            <a onClick={()=>setMenuOpen(false)} href="#contact" className="block">Contact</a>
            <a href="https://wa.me/256700123456" className="block bg-[#22C55E] text-white text-center py-3 rounded-full mt-3">WhatsApp Us</a>
          </div>
        )}
      </header>

      {/* HERO - MOBILE + DESKTOP */}
      <section id="home" className="bg-[#E0F2FE]">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <div className="inline-flex bg-white px-4 py-1.5 rounded-full text-[11px] font-bold border shadow-sm">⭐ Admissions Open Term I 2026 • Only 8 Slots Left</div>
            <h1 className="mt-5 text-[36px] md:text-[62px] font-black leading-[0.95]">Where Little Stars<br/><span className="text-[#EC4899]">Begin to Shine</span></h1>
            <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-gray-600">Iganga&apos;s most loved nursery for ages 2-6. Montessori-inspired, safe fenced compound, warm meals, extended daycare till 5:30pm. Licensed by MoES, trusted by 100+ families since 2019.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href="#enroll" className="bg-[#EC4899] text-white px-7 md:px-8 py-3.5 rounded-full font-bold text-[14px] shadow">Enroll Now →</a><a href="#gallery" className="bg-white border-2 border-[#1E3A8A] px-7 md:px-8 py-3.5 rounded-full font-bold text-[14px]">See Our School</a></div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[420px]">
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-xl">100+</p><p className="text-[10px] font-bold text-gray-500">FAMILIES</p></div>
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-xl">7+</p><p className="text-[10px] font-bold text-gray-500">YEARS</p></div>
              <div className="bg-white rounded-2xl p-3 border shadow-sm text-center"><p className="font-black text-xl">1:10</p><p className="text-[10px] font-bold text-gray-500">RATIO</p></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=800&fit=crop" alt="kids" className="rounded-[24px] md:rounded-[32px] h-[380px] md:h-[520px] w-full object-cover shadow-2xl" />
            <div className="space-y-3 md:space-y-4">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" alt="classroom" className="rounded-[20px] md:rounded-[24px] h-[180px] md:h-[250px] w-full object-cover shadow-xl" />
              <div className="bg-white rounded-[20px] p-4 shadow-xl border"><p className="font-black text-sm">🛡️ Safe & Licensed</p><p className="text-[11px] text-gray-500 mt-1">CCTV • Fenced • First Aid</p><img src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=400&h=200&fit=crop" alt="safe" className="rounded-xl mt-3 h-20 md:h-24 w-full object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-black text-center">Safe. Stimulating. Loving.</h2>
          <p className="text-center text-gray-500 text-[13px] mt-2">Real facilities, not just promises.</p>
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {t:"Bright Classrooms", d:"Low tables, alphabet walls, Montessori", img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"},
              {t:"Play Park & Sand Pit", d:"Swings, slides, tyres, soft ground", img:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop"},
              {t:"Healthy Meals", d:"Millet porridge, rice, beans, fruits", img:"https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop"},
              {t:"Safe Transport", d:"Van with matron, Iganga routes", img:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop"},
              {t:"Library & Art Corner", d:"100+ books, puzzles, crayons", img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop"},
              {t:"Health & Hygiene", d:"Handwash, first aid, clean toilets", img:"https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&h=400&fit=crop"},
            ].map(c=>(
              <div key={c.t} className="border rounded-[24px] overflow-hidden hover:shadow-xl transition">
                <img src={c.img} alt={c.t} className="h-48 w-full object-cover" />
                <div className="p-5"><h4 className="font-black text-[14px]">{c.t}</h4><p className="text-[12px] text-gray-500 mt-1">{c.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + DAILY SCHEDULE */}
      <section id="about" className="bg-[#FEF3C7] py-14 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-black">Built With Love for Iganga</h2>
            <p className="mt-4 text-[14px] leading-6 text-gray-700">Started in 2019 by Tr. Sarah after seeing working mothers in Iganga market struggle to find safe daycare. What started with 6 kids now serves 100+ families. We are not a business, we are an extended family.</p>
            <div className="mt-6 space-y-3">
              <div className="bg-[#FBCFE8] rounded-2xl p-4 flex gap-3 border"><span>❤️</span><div><p className="font-black text-[13px]">Mission</p><p className="text-[12px]">Nurture every child&apos;s potential in loving safe environment.</p></div></div>
              <div className="bg-[#BFDBFE] rounded-2xl p-4 flex gap-3 border"><span>📖</span><div><p className="font-black text-[13px]">Vision</p><p className="text-[12px]">Be Iganga&apos;s most trusted foundation for P1 success.</p></div></div>
              <div className="bg-white rounded-2xl p-4 flex gap-3 border"><span>🏆</span><div><p className="font-black text-[13px]">Promise</p><p className="text-[12px]">Small classes 1:10, weekly WhatsApp reports, no caning, meals included.</p></div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=400&fit=crop" alt="about" className="rounded-2xl mt-6 h-48 w-full object-cover" />
          </div>
          <div className="bg-white rounded-[28px] p-6 md:p-7 shadow-sm border">
            <h3 className="font-black text-[18px]">A Day at TotoShine</h3>
            <p className="text-[12px] text-gray-500 mt-1">7:30am - 12:30pm + Daycare till 5:30</p>
            <div className="mt-6 space-y-3">
              {[
                ["7:30-8:00","Arrival & Health Check","Welcome, hand wash, temp"],
                ["8:00-9:00","Circle Time & Phonics","Songs, alphabet, numbers"],
                ["9:00-9:30","Porridge Break","Millet + fruits"],
                ["9:30-11:00","Learning Centers","Art, blocks, puzzles"],
                ["11:00-12:00","Outdoor Play","Park, games, gardening"],
                ["12:00-12:30","Lunch & Story","Rice, beans, story"],
                ["12:30-5:30","Daycare (Optional)","Nap, snacks, play"],
              ].map(([time,title,desc])=>(
                <div key={time} className="flex gap-3"><div className="text-[10px] font-black bg-[#EFF6FF] px-3 py-1 rounded-full h-fit whitespace-nowrap">{time}</div><div><p className="font-bold text-[13px]">{title}</p><p className="text-[11px] text-gray-500">{desc}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-black text-center">Our Programs</h2>
          <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-6">
            {[
              {age:"Baby 2-3y", name:"Gentle Start", price:"150k", img:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop", points:["Potty training","Sensory play","Songs & stories"]},
              {age:"Middle 3-4y", name:"Curiosity Club", price:"180k", img:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop", points:["Phonics & numbers","Art & craft","Social skills"]},
              {age:"Top 4-6y", name:"P1 Ready", price:"200k", img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", points:["Reading & writing","Math & science","Interview prep"]},
            ].map(p=>(
              <div key={p.age} className="rounded-[24px] border-2 overflow-hidden hover:shadow-lg transition">
                <img src={p.img} alt={p.name} className="h-52 w-full object-cover" />
                <div className="p-6"><span className="text-[11px] font-bold bg-blue-50 px-3 py-1 rounded-full">{p.age}</span><h3 className="font-black mt-3 text-[18px]">{p.name}</h3><ul className="mt-3 text-[13px] list-disc ml-5 space-y-1">{p.points.map(pt=><li key={pt}>{pt}</li>)}</ul><div className="mt-4 bg-[#1E3A8A] text-white inline-block px-4 py-2 rounded-full text-[12px] font-bold">{p.price}/term</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS + NUTRITION RESTORED */}
      <section className="py-14 md:py-16 px-6 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h2 className="text-[24px] md:text-[28px] font-black">Meet Our Caring Teachers</h2>
            <p className="text-[13px] text-gray-600 mt-2">All ECCD certified, female, mothers themselves. Trained in first aid & child psychology.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
              {[
                {name:"Tr. Sarah", role:"Head Teacher", exp:"8 yrs", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"},
                {name:"Tr. Aisha", role:"Baby Class", exp:"5 yrs", img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"},
                {name:"Tr. Grace", role:"Top Class", exp:"6 yrs", img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"},
              ].map(t=>(
                <div key={t.name} className="bg-white rounded-2xl p-4 border text-center"><img src={t.img} alt={t.name} className="w-14 h-14 rounded-full mx-auto object-cover" /><p className="font-black text-[13px] mt-3">{t.name}</p><p className="text-[11px] text-gray-500">{t.role}</p><p className="text-[10px] font-bold mt-1 bg-[#FEF3C7] inline-block px-2 py-0.5 rounded-full">{t.exp}</p></div>
              ))}
            </div>
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=400&fit=crop" alt="teachers" className="rounded-2xl mt-6 h-48 w-full object-cover" />
          </div>
          <div className="bg-white rounded-[24px] p-6 md:p-7 border">
            <h3 className="font-black text-[18px]">🍲 Nutrition & Safety</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 md:gap-4 text-[13px]">
              <div className="bg-[#FFFBEB] p-4 rounded-xl border"><p className="font-bold">Meals Included</p><p className="text-[11px] mt-1 text-gray-600">Porridge 9am, Lunch 12pm, Fruit. No junk.</p></div>
              <div className="bg-[#FEF2F2] p-4 rounded-xl border"><p className="font-bold">Health Protocol</p><p className="text-[11px] mt-1 text-gray-600">Daily temp check, handwash, sick policy.</p></div>
              <div className="bg-[#F0FDF4] p-4 rounded-xl border"><p className="font-bold">Safe Compound</p><p className="text-[11px] mt-1 text-gray-600">Fenced, CCTV, fire extinguisher.</p></div>
              <div className="bg-[#EFF6FF] p-4 rounded-xl border"><p className="font-bold">Parent Updates</p><p className="text-[11px] mt-1 text-gray-600">Weekly WhatsApp reports, photos.</p></div>
            </div>
            <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=300&fit=crop" alt="meals" className="rounded-xl mt-6 h-40 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-black text-center">Life at TotoShine</h2>
          <p className="text-center text-[13px] text-gray-500 mt-2">Real moments - learning, playing, eating</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=800&fit=crop",
              "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&h=800&fit=crop",
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
            ].map((src,i)=>(
              <img key={i} src={src} alt="gallery" className={`rounded-2xl w-full object-cover hover:scale-105 transition duration-300 ${i%3===1? 'h-64' : 'h-44'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS RESTORED */}
      <section className="py-14 md:py-16 px-6 bg-[#FEF3C7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-black text-center">What Iganga Parents Say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {name:"Mama Ethan", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", text:"My son used to cry. Now he wakes me up 'Mama school!' Teachers treat him like their own."},
              {name:"Papa Fatimah", img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", text:"Top class prepared my girl for P1 interview. She joined Top Care Primary. Money well spent."},
              {name:"Mama Twins", img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", text:"Daycare till 5:30 saved my business in market. Safe, fed, learning while I work."},
            ].map(t=>(
              <div key={t.name} className="bg-white rounded-[20px] p-6 border shadow-sm hover:shadow-md transition"><div className="flex gap-3 items-center"><img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" /><div><p className="font-black text-[13px]">{t.name}</p><p className="text-[11px]">⭐⭐⭐⭐⭐</p></div></div><p className="mt-4 text-[13px] leading-6">"{t.text}"</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES + ENROLL WITH ALL FIELDS */}
      <section id="fees" className="bg-[#E0F2FE] py-14 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] p-6 md:p-7"><h3 className="font-black text-[18px]">Fees (UGX / Term)</h3><img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=300&fit=crop" alt="fees" className="rounded-xl mt-4 h-32 w-full object-cover" /><div className="mt-4 border rounded-xl overflow-hidden text-[13px]"><div className="grid grid-cols-2 bg-[#1E3A8A] text-white p-3 font-bold text-[12px]"><span>Class</span><span>Fee</span></div><div className="grid grid-cols-2 p-3 border-b"><span>Baby</span><b>150,000</b></div><div className="grid grid-cols-2 p-3 border-b"><span>Middle</span><b>180,000</b></div><div className="grid grid-cols-2 p-3"><span>Top</span><b>200,000</b></div></div><ul className="mt-4 text-[11px] space-y-1 text-gray-600 list-disc ml-5"><li>Registration 30k one-time</li><li>Meals & porridge included</li><li>Daycare 20k/day or 300k/term</li><li>Sibling 10% off</li><li>Uniform 35k (2 sets)</li></ul></div>

          <div id="enroll" className="bg-[#1E3A8A] rounded-[24px] p-6 md:p-7 text-white">
            <h3 className="font-black text-xl">Full Enrollment Form</h3><p className="text-[12px] opacity-70 mt-1">We reply on WhatsApp in 15 mins</p>
            <div className="mt-5 space-y-3">
              <input placeholder="Parent Full Name *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" />
              <div className="grid grid-cols-2 gap-2"><input placeholder="WhatsApp *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /><input placeholder="Alt Number" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /></div>
              <div className="grid grid-cols-2 gap-2"><input placeholder="Child Full Name *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /><input placeholder="Age *" className="w-full p-3 rounded-full text-[13px] text-black outline-none" /></div>
              <div className="grid grid-cols-2 gap-2"><select className="w-full p-3 rounded-full text-[13px] text-black outline-none"><option>Gender</option><option>Boy</option><option>Girl</option></select><select className="w-full p-3 rounded-full text-[13px] text-black outline-none"><option>Class</option><option>Baby 2-3y</option><option>Middle 3-4y</option><option>Top 4-6y</option></select></div>
              <input placeholder="Allergies / Medical Notes" className="w-full p-3 rounded-full text-[13px] text-black outline-none" />
              <input placeholder="Village / Residence" className="w-full p-3 rounded-full text-[13px] text-black outline-none" />
              <textarea placeholder="Message / Previous School" rows={2} className="w-full p-3 rounded-2xl text-[13px] text-black outline-none"></textarea>
              <a href="https://wa.me/256700123456?text=Hello%20TotoShine%20I%20want%20to%20enroll" target="_blank" className="block bg-[#EC4899] hover:bg-pink-600 text-center py-3.5 rounded-full font-black text-[14px]">Send via WhatsApp →</a>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 md:p-7"><h3 className="font-black text-[18px]">Admissions Steps</h3><div className="mt-6 space-y-4">{[["1","Book Tour","Visit Mon-Sat, meet teachers"],["2","Fill Form","Immunization card needed"],["3","Pay Registration","30k reserves slot"],["4","Start Shining!","Uniform & welcome kit"]].map(([n,t,d])=>(<div key={n} className="flex gap-3"><div className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-black text-[12px] shrink-0">{n}</div><div><p className="font-bold text-[13px]">{t}</p><p className="text-[11px] text-gray-500">{d}</p></div></div>))}</div><div className="mt-6 p-4 bg-[#FFFBEB] rounded-xl border"><p className="font-bold text-[12px]">📍 Location</p><p className="text-[11px] mt-1">Plot 12 Main St, Iganga, 1.2km from Main Market, Near Top Care SS. Boda: "TotoShine Nursery"</p></div></div>
        </div>
      </section>

      {/* FAQ DYNAMIC ACCORDION */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] font-black text-center">Common Questions</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f,i)=>(
              <div key={i} className="border rounded-2xl overflow-hidden">
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center p-5 text-left bg-[#F8FAFC] hover:bg-[#EFF6FF]">
                  <span className="font-black text-[13px]">{f.q}</span><span className="text-xl">{openFaq===i? "−" : "+"}</span>
                </button>
                {openFaq===i && <div className="p-5 text-[12px] leading-6 text-gray-600 bg-white">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION - NEW */}
      <section id="contact" className="py-14 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-[28px] font-black">Find Us in Iganga</h2>
            <p className="text-[13px] text-gray-600 mt-2 leading-6">We are 1.2km from Iganga Main Market, opposite Top Care Secondary School. Ask any boda "TotoShine Nursery" - everyone knows us. Free parking, safe boda drop zone.</p>
            <div className="mt-6 space-y-3 text-[13px]">
              <p>📍 <b>Address:</b> Plot 12 Main Street, Iganga Municipality, Uganda</p>
              <p>📞 <b>Call:</b> +256 700 123 456 / +256 752 123 456</p>
              <p>✉️ <b>Email:</b> info@totoshine.ac.ug</p>
              <p>🕒 <b>Hours:</b> Mon-Fri 7:30am-5:30pm, Sat 8am-1pm (Daycare)</p>
              <p>🚌 <b>Transport:</b> Van with matron - Iganga town 50k/term</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3"><a href="https://wa.me/256700123456" className="bg-[#22C55E] text-white px-6 py-3 rounded-full font-bold text-[13px]">Get Directions on WhatsApp</a><a href="tel:+256700123456" className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full font-bold text-[13px]">Call Now</a></div>
            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=300&fit=crop" alt="location" className="rounded-2xl mt-6 h-40 w-full object-cover" />
          </div>
          <div className="rounded-[24px] overflow-hidden border shadow-xl">
            <iframe
              title="TotoShine Location"
              src="https://maps.google.com/maps?q=Iganga%20Main%20Street%20Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="480"
              style={{border:0}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-white p-4 flex justify-between items-center"><p className="font-bold text-[12px]">📍 TotoShine Nursery, Iganga</p><a href="https://www.google.com/maps/search/Iganga+Main+Street+Uganda" target="_blank" className="bg-[#1E3A8A] text-white px-4 py-2 rounded-full text-[11px] font-bold">Open in Google Maps</a></div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1E3A8A] text-white py-10 text-center px-6">
        <p className="font-black text-xl">☀️ TotoShine Nursery School Iganga</p>
        <p className="text-[11px] opacity-70 mt-2">Plot 12 Main St, Iganga • Licensed by Ministry of Education & Sports Uganda • Certificate NUR/IG/2019/042</p>
        <p className="text-[10px] opacity-30 mt-6">© 2026 TotoShine. Premium Website 1.2M UGX — All content restored + Map + Dynamic FAQ + Mobile Menu</p>
      </footer>
    </main>
  );
}
'use client';

import Threads from '../../components/Threads';

export default function MemoPage() {
  return (
    <main className="min-h-screen flex overflow-hidden" style={{backgroundColor: '#f1efe3'}}>
      {/* Left Sidebar - Threads Animation (hidden on mobile) */}
      <div className="w-third h-screen relative hide-on-mobile" style={{backgroundColor: '#f1efe3'}}>
        <Threads
          color={[0, 0, 0]}
          amplitude={2}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="w-two-thirds w-full-mobile h-screen overflow-y-auto px-6 py-4" style={{backgroundColor: '#f1efe3'}}>
        <div className="max-w-3xl text-black mt-250">
          {/* Top Spacing */}
          <div style={{height: '160px'}}></div>
          
          {/* Main Title */}
          <div className="mb-64 text-center">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem', justifyContent: 'center', width: '100%' }}>
              <img
                src="/logo.png"
                alt="Asteri logo"
                style={{ maxHeight: '32rem', maxWidth: '90vw', width: 'auto', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          </div>
          
          {/* Large Spacing */}
          <div style={{height: '410px'}}></div>
          
          {/* Team Section */}
          <div className="mb-6 text-lg leading-tight">
            <p><span className="text-red-700 font-semibold">CEO & Co-founder:</span> <a href="https://www.linkedin.com/in/dhruvkl/" className="text-red-600 hover:text-red-700">Dhruv Lalwani</a></p>
            <p><span className="text-red-700 font-semibold">CTO & Co-founder:</span> <a href="https://www.linkedin.com/in/ayen-monasha-b96666236/" className="text-red-600 hover:text-red-700">Ayen Monasha</a></p>
            <p><span className="text-red-700 font-semibold">CMO & Co-founder:</span> <a href="https://www.linkedin.com/in/sophia-green1/" className="text-red-600 hover:text-red-700">Sophia Green</a></p>
          </div>

          {/* Our Thesis */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Thesis</h2>
              <div className="space-y-4 text-base leading-normal text-gray-800 font-ui">
                <p>
                  Most AI today feels <span className="text-red-700 font-semibold">generic and disconnected</span> because it doesn't start with a real understanding of who you are. Instead, it depends on surface-level or self-reported data from platforms like <span className="text-red-700 font-semibold">LinkedIn or Instagram</span>, missing the depth of how people actually behave and express themselves.
                </p>
                <p>
                  We begin with <span className="text-red-700 font-semibold">YouTube and TikTok</span>, the two richest behavioral ecosystems on the planet, allowing people to pick up from where they already are rather than starting from zero. By helping users seamlessly export the foundation of their social graph into our apps, we unlock a living picture of their interests, rhythms, and emotions.
                </p>
                <p>
                  From there we work on the frontier of <span className="text-red-700 font-semibold">AI memory</span>, designing systems that create the "this app gets me" feeling, the real aha moment. Our mission is to deliver <span className="text-red-700 font-semibold">true personalization at scale</span>, building technology that remembers you and evolves with you over time.
                </p>
                <p>
                  We believe the next suite of consumer apps and social interfaces will not exist as isolated products but as <span className="text-red-700 font-semibold">connected experiences</span> that understand, remember, and adapt together, forming an ecosystem that truly reflects the people who use it.
                </p>
              </div>
          </section>

          {/* Building the ScaleAI */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Building the ScaleAI for Human Personalization</h2>
            <div className="space-y-4 text-base leading-normal text-gray-800 font-ui">
              <p>
                Imagine a world where AI understands you better than your closest friends, without you ever saying a word. Today, AI systems are limited because they rely on shallow, surface-level data such as your LinkedIn bio, your Instagram follows, or a survey you quickly filled out. But these systems miss the <span className="text-red-700 font-semibold">deep psychological patterns</span> hidden in the everyday behaviors you've unknowingly shaped through platforms like <span className="text-red-700 font-semibold">TikTok and YouTube</span>.
              </p>
              <p>
                Over the past decade, you've unintentionally constructed a <span className="text-red-700 font-semibold">rich Skinner box</span>, a complex map of preferences and behaviors that these platforms meticulously track yet remains untapped for true AI personalization. These algorithms weren't built with modern AI in mind, but they've accidentally captured the most detailed snapshot of human behavior ever recorded.
              </p>
              <p>
                Our team's background in <span className="text-red-700 font-semibold">neuroscience, cognitive science, and a deep taste for consumer technology</span> gives us a unique lens to translate these behavioral signals into systems that actually understand people. We believe the missing layer in AI is not intelligence, it's <span className="text-red-700 font-semibold">memory</span>. Memory is what makes intelligence feel human. It's what transforms an interaction from mechanical to meaningful.
              </p>
              <p>
                You could be the most charismatic, smart, funny, and attractive person in the world, but if you don't remember anything about me, I won't feel seen. That's exactly the problem current AI systems face. They can be witty, articulate, and efficient, yet they lack continuity because they don't remember who you are, what you like, or how you felt yesterday.
              </p>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg my-6">
                <p className="text-gray-800 italic">"I don't want to switch off of GPT because it knows a lot about me."</p>
                <p className="text-gray-600 text-sm mt-2">(Based on informal interviews conducted with 200+ students across college campuses who chose to stay with ChatGPT despite having free Gemini Pro access.)</p>
              </div>
              <p>
                At our company, we see memory as the true driver of personalization and <span className="text-red-700 font-semibold">proactivity as its natural evolution</span>. Once AI can remember, it can begin to anticipate, surfacing the right ideas, connections, and actions before you even ask. By building on the behavioral foundations of platforms like TikTok and YouTube, we're creating AI systems that don't just respond, they remember and act. They adapt, recall, and evolve with you over time, unlocking a new era of truly personal and proactive technology that feels less like a tool and more like a <span className="text-red-700 font-semibold">companion that genuinely understands and supports you</span>.
              </p>
            </div>
          </section>

          {/* Our Strategy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Strategy</h2>
            <div className="space-y-4 text-base leading-normal text-gray-800 font-ui">
              <p>
                We have been quietly building an <span className="text-red-700 font-semibold">Applied AI Consumer Lab</span>, a company experimenting at the frontier of memory, proactivity, and human-AI interaction. Our mission is to design systems that understand people deeply, anticipate their needs, and enhance their daily lives. We are not building another consumer app. We are building the foundation for a new class of intelligent, personalized interfaces that integrate seamlessly into how people live, connect, and express themselves.
              </p>
              <p>
                Our focus is on <span className="text-red-700 font-semibold">AI memory and proactive agents</span>, systems that don't just respond but act. We are exploring how AI can become a daily collaborator, helping people across multiple dimensions of life:
              </p>
              <div className="ml-4 space-y-3">
                <p>
                  <span className="text-red-700 font-semibold">Social connection:</span> Helping people meet new friends and reconnect with old ones through shared behaviors and emotional alignment.
                </p>
                <p>
                  <span className="text-red-700 font-semibold">Health and wellness:</span> Using memory and behavioral insights to monitor patterns and support well-being, similar to how Flo personalizes health cycles.
                </p>
                <p>
                  <span className="text-red-700 font-semibold">Fashion and self-expression:</span> Translating behavioral and visual cues from platforms like TikTok and YouTube into a dynamic reflection of personal style.
                </p>
                <p>
                  <span className="text-red-700 font-semibold">Everyday utility:</span> Creating proactive agents that anticipate needs, remind, suggest, and assist before a user even has to ask.
                </p>
              </div>
              <p>
                Over the past few months, we have been testing these ideas in the real world. We have built and launched more than <span className="text-red-700 font-semibold">ten consumer AI apps</span>, failed fast on several, and scaled others to over <span className="text-red-700 font-semibold">4,000 active users combined</span>. Each experiment has taught us something new about true consumer intent—what people actually want when AI becomes part of their lives.
              </p>
              <p>
                Now, we are channeling those learnings into a unified system: a <span className="text-red-700 font-semibold">memory and personalization engine</span> that powers proactive AI agents across verticals. Each new app we launch strengthens the memory layer, creating an interconnected ecosystem of experiences that learns collectively and adapts over time.
              </p>
              <p>
                Our next step is to scale the lab by expanding our team, deepening research partnerships, and building long-term infrastructure around <span className="text-red-700 font-semibold">behavioral data, memory graphs, and lightweight on-device models</span>. As this foundation grows, it evolves into a personal intelligence layer that moves with the user across every part of their digital and physical life.
              </p>
              <p>
                We believe the next generation of consumer AI will not be defined by a single product. It will be a <span className="text-red-700 font-semibold">connected network of proactive, memory-powered experiences</span> that understand, remember, and grow with people. We have been quietly building the lab to make that future real.
              </p>
            </div>
            <div className="mt-8 mb-8">
              <div className="relative">
                <div className="absolute left-0 top-1/2 w-16 h-px bg-black transform -translate-y-1/2"></div>
                <div className="pl-24">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-brand text-black leading-tight" style={{fontWeight: 400}}>
                    Bill Gates once said he wants everyone to have their own PC running Windows.
                  </p>
                  <p className="text-4xl md:text-5xl lg:text-6xl font-brand text-black leading-tight mt-4" style={{fontWeight: 400}}>
                    We want everyone to get their own Jarvis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Graphical Representations Note */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Just some graphical representations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-3 text-base">What AI is currently built on:</h3>
                <div className="border border-gray-300 rounded-lg p-2 bg-white">
                  <img 
                    src="/2dgraph.png" 
                    alt="2D representation of current AI data - surface-level data, surveys, and shallow behavioral indicators"
                    className="w-full h-auto rounded"
                  />
                </div>
                <p className="text-gray-600 text-sm mt-2">2D surface-level data, surveys, and shallow behavioral indicators</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-3 text-base">What we're building:</h3>
                <div className="border border-gray-300 rounded-lg p-2 bg-white">
                  <img 
                    src="/3dgraph.png" 
                    alt="3D representation of future AI data - deep behavioral data layer with subconscious pattern recognition"
                    className="w-full h-auto rounded"
                  />
                </div>
                <p className="text-gray-600 text-sm mt-2">3D deep behavioral data layer with subconscious pattern recognition</p>
              </div>
            </div>
          </section>


          {/* Why Asteri Wins */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Asteri Wins</h2>
            <div className="space-y-4 text-base leading-normal text-gray-800 font-ui">
              <p>
                We are entering a new era of human AI interaction. The world doesn't need another app that does one thing, it needs a <span className="text-red-700 font-semibold">connected system that understands people across everything they do</span>.
              </p>
              <p>
                Social networks used to be destinations. You went to Facebook to connect, to Instagram to share, to TikTok to express. But the next generation of platforms will not live in a single app. They will <span className="text-red-700 font-semibold">live with the user, across time, memory, and context</span>.
              </p>
              <p>
                Asteri wins because we are building exactly that, the missing behavioral data and memory infrastructure that allows AI to truly personalize human experience. Our system will benefit from the existing social graphs that users have already created through YouTube and TikTok. Over time, we will own a <span className="text-red-700 font-semibold">social graph that is completely unique</span>, built from authentic behavior and interaction. After hundreds of conversations with users, friends, and classmates, our insight is clear: this graph should not live inside a single app, it should <span className="text-red-700 font-semibold">live across our entire ecosystem</span>. Every new experience we launch will be aware of that graph, creating a connected layer of personalization that grows stronger with every interaction.
              </p>
              <p>
                There are strong cultural tailwinds behind this shift. Gen Z is done with mindless scrolling. Despite social apps being more addictive than ever, engagement among younger audiences is actually declining. What people want now is real connection, authenticity, belonging, and tools that understand them without demanding attention.
              </p>
              <p>
                The first wave of AI social apps like Sora2 proved this tension. They gained instant hype but no retention. People don't want synthetic feeds; they want systems that make their real lives richer.
              </p>
              <p>
                Asteri sits exactly at that intersection. We believe AI will stay, but its role is changing. AI should not replace people, it should remember, connect, and empower them. We see a world of <span className="text-red-700 font-semibold">agent to agent collaboration</span>, where every user has their own Jarvis, not a single omnipotent assistant, but a network of smaller, specialized agents that act together, coordinate, and get things done for you.
              </p>
              <p>
                That is the infrastructure we are building, a <span className="text-red-700 font-semibold">human centered layer of memory, intelligence, and coordination</span> that bridges people and AI. It is not just another social product; it is the operating system for the next generation of digital life.
              </p>
            </div>
          </section>

          {/* Our First Product Button to be added later
          <div className="my-20 text-center">
            <a 
              href="/phtogrph" 
              className="text-xl font-semibold text-black hover:text-red-700 transition-colors duration-300 border-b-2 border-black hover:border-red-700 pb-1"
            >
              Our First Product
            </a>
          </div> */}

          {/* Footer */}
          <footer className="site-footer mt-16">
            <a href="/privacy">Privacy</a>
            <span> · </span>
            <a href="/terms">Terms</a>
          </footer>
        </div>
      </div>
    </main>
  );
}


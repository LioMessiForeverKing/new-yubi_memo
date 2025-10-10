'use client';

import Threads from '../components/Threads';

export default function Home() {
  function handleLogoClick(e: React.MouseEvent<HTMLImageElement>) {
    const el = e.currentTarget;
    el.classList.remove('spin-once');
    // Force reflow to restart the animation
    void el.getBoundingClientRect();
    el.classList.add('spin-once');
  }

  return (
    <main className="min-h-screen flex overflow-hidden" style={{backgroundColor: '#FFFCF3'}}>
      {/* Left Sidebar - Threads Animation (hidden on mobile) */}
      <div className="w-third h-screen relative hide-on-mobile" style={{backgroundColor: '#FFFCF3'}}>
        <Threads
          color={[0, 0, 0]}
          amplitude={2}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="w-two-thirds w-full-mobile h-screen overflow-y-auto px-6 py-4 border-l border-gray-300" style={{backgroundColor: '#FFFCF3'}}>
        <div className="max-w-3xl text-black mt-500">
          {/* Top Spacing */}
          <div style={{height: '160px'}}></div>
          
          {/* Main Title */}
          <div className="mb-64 text-center">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem' }}>
              <img
                src="/logo.svg"
                alt="Ubi logo"
                className="spin-once"
                onClick={handleLogoClick}
                style={{ height: '8rem', width: 'auto', display: 'inline-block', cursor: 'pointer' }}
              />
              <img
                src="/ubi.svg"
                alt="Ubi wordmark"
                style={{ height: '8rem', width: 'auto', display: 'inline-block' }}
              />
            </div>
          </div>
          
          {/* Large Spacing */}
          <div style={{height: '410px'}}></div>
          
          {/* Team Section */}
          <div className="mb-6 text-lg leading-tight">
            <p><span className="text-red-700 font-semibold">CEO:</span> <a href="https://www.linkedin.com/in/dhruvkl/" className="text-red-600 hover:text-red-700">Dhruv Lalwani</a></p>
            <p><span className="text-red-700 font-semibold">CTO:</span> <a href="https://www.linkedin.com/in/ayen-monasha-b96666236/" className="text-red-600 hover:text-red-700">Ayen Monasha</a></p>
            <p><span className="text-red-700 font-semibold">COO:</span> <a href="https://www.linkedin.com/in/sophia-green1/" className="text-red-600 hover:text-red-700">Sophia Green</a></p>
          </div>

          {/* Our Thesis */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Thesis</h2>
            <div className="space-y-4 text-base leading-normal text-gray-800 font-ui">
              <p>
                Most AI today is <span className="text-red-700 font-semibold">generic and shallow</span>; they lack true information about the user.
              </p>
              <p>
                Because they lack a real, <span className="text-red-700 font-semibold">behavior-driven understanding</span> of the user, they're built on limited or self-reported data (<span className="text-red-700 font-semibold">Webscraping, LinkedIn, Instagram</span>).
              </p>
              <p>
                We solve this by tapping into the rich <span className="text-red-700 font-semibold">Skinner box data</span> that you've been unintentionally building over the years, but no one is using - <span className="text-red-700 font-semibold">TikTok and YouTube</span>.
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
                  Over the past decade, you've unintentionally constructed a <span className="text-red-700 font-semibold">rich Skinner box</span>; a complex map of preferences and behaviors that these platforms meticulously track, yet <span className="text-red-700 font-semibold">remains untapped for true AI personalization</span>. These algorithms were not initially built with modern AI applications in mind, yet they've inadvertently captured the most detailed snapshot of human behavior we've ever seen.
                </p>
                <p>
                  Our team's deep-rooted fascination with <span className="text-red-700 font-semibold">neuroscience, philosophy, cognitive science, and cybersecurity</span> uniquely positions us to harness these insights. Neuroscience, in particular, enables us to decode complex behavioral patterns and translate them into actionable insights for personalized AI experiences.
                </p>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg my-6">
                <p className="font-bold text-gray-800 mb-3 text-base">YouTube and TikTok's algorithms were not built with AI as we know it today in mind. Why is Google losing the AI war right now to GPT?</p>
                <div className="space-y-2 text-base">
                  <p className="text-gray-800">"I don't want to switch off of GPT because it knows a lot about me." - <em className="text-gray-600">(Based on informal interviews conducted with 100+ Rutgers students who chose to stay with ChatGPT despite having free Gemini Pro access.)</em></p>
                  <p className="text-gray-800">Imagine if Google were to release a Gemini tomorrow, trained on what the YouTube algorithm knows about you - a <span className="text-red-700 font-semibold">personal Gemini Assistant for everyone</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Current Plan */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Current Plan</h2>
            <div className="space-y-5 text-base leading-normal text-gray-800 font-ui">
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Our initial strategy is B2B:</h3>
                <p>We are building a robust data infrastructure and engine that we license to startups positioned for rapid growth in the consumer market. As proof of traction, we have secured a <span className="text-red-700 font-semibold">Letter of Intent and contract</span> with <span className="text-red-700 font-semibold">Ditto AI</span>, a company that averages <span className="text-red-700 font-semibold">1.5 million impressions per TikTok/Instagram post</span>. The company has a waitlist <span className="text-red-700 font-semibold">exceeding 10,000 users</span>, and has attracted interest from high-profile investors such as <span className="text-red-700 font-semibold">Mark Cuban</span>.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Distribution through partnerships:</h3>
                <p>By powering Ditto AI's next-generation app with our engine, we gain immediate access to their substantial audience. This partnership enables us to accelerate consumer adoption of our platform without the costs and risks of direct-to-consumer acquisition.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Network effects and data accumulation:</h3>
                <p>As users engage with products built on our engine, we collect high-value behavioral and preference data. Upon reaching a critical mass, approximately <span className="text-red-700 font-semibold">50,000 users</span>, we will anonymize and aggregate this data to sell actionable insights to enterprise clients, establishing a new revenue stream. Our long-term goal is to offer integrations with major platforms such as <span className="text-red-700 font-semibold">OpenAI</span>, enabling users to export and leverage their personalized <span className="text-red-700 font-semibold">"Ubi Brain"</span> across services.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Transition to proprietary data assets:</h3>
                <p>With sufficient adoption, we will evolve from aggregating third-party behavioral data to generating our own proprietary datasets by introducing hardware and first-party experiences. This positions our Data Layer as a unique, defensible asset, fully under our control and increasingly valuable to enterprise partners and AI platforms.</p>
              </div>
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
            <p className="text-sm text-gray-600 mb-5 italic">(Based on something that Dhruv, our COO, built for himself in 2022).</p>
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
                <h3 className="font-bold text-gray-800 mb-3 text-base">What we will build:</h3>
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

          {/* Why ubi Wins */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Ubi Wins</h2>
            <div className="space-y-4 text-base leading-normal text-gray-800">
              <p>
                While others are guessing at user preferences, <span className="text-red-700 font-semibold">Ubi already knows</span>. We are building the critical missing infrastructure; the <span className="text-red-700 font-semibold">behavioral data layer that makes truly personal AI possible</span>.
              </p>
              <div className="bg-gray-50 border border-gray-300 p-4 rounded-lg">
                <p className="font-bold text-gray-900 text-base">
                  We are not here to build yet another AI tool. We are here to build the <span className="text-red-700 font-semibold">fundamental intelligence layer that future AI depends upon</span>.
                </p>
              </div>
              <p>
                To prove our thesis, we built a prototype about the idea. You can view it <a href="https://screenapp.io/app/#/shared/tTibGn7897" className="text-red-600 hover:text-red-700 font-semibold">here</a>. The fact that this is almost <span className="text-red-700 font-semibold">95% right about who Ayen (our CTO) is</span>, is a proof of concept that our thesis makes sense.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
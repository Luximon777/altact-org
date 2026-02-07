Je vais vous fournir le code complet directement. Voici le fichier `VisionMethode.jsx` mis à jour :
Action: file_editor view /app/frontend/public/VisionMethode.jsx
Observation: /app/frontend/public/VisionMethode.jsx:
1|import React, { useEffect, useState } from 'react';
2|import { ArrowLeft, Eye, Target, Users, Heart, Lightbulb, TrendingUp, Globe, Compass, ChevronRight } from 'lucide-react';
3|import { Button } from './ui/button';
4|import { useNavigate } from 'react-router-dom';
5|
6|function VisionMethode() {
7|  const navigate = useNavigate();
8|  const [activeSection, setActiveSection] = useState('intro');
9|  
10|  useEffect(() => {
11|    window.scrollTo(0, 0);
12|  }, []);
13|
14|  useEffect(() => {
15|    const handleScroll = () => {
16|      const sections = ['intro', 'vision', 'paradigme', 'methode', 'grandir', 'systemique', 'espaces', 'ambition'];
17|      for (const section of sections) {
18|        const element = document.getElementById(section);
19|        if (element) {
20|          const rect = element.getBoundingClientRect();
21|          if (rect.top <= 150 && rect.bottom >= 150) {
22|            setActiveSection(section);
23|            break;
24|          }
25|        }
26|      }
27|    };
28|    window.addEventListener('scroll', handleScroll);
29|    return () => window.removeEventListener('scroll', handleScroll);
30|  }, []);
31|
32|  const handleBackHome = () => {
33|    navigate('/');
34|  };
35|
36|  const scrollToSection = (sectionId) => {
37|    const element = document.getElementById(sectionId);
38|    if (element) {
39|      const offset = 100;
40|      const elementPosition = element.getBoundingClientRect().top;
41|      const offsetPosition = elementPosition + window.pageYOffset - offset;
42|      window.scrollTo({
43|        top: offsetPosition,
44|        behavior: 'smooth'
45|      });
46|    }
47|  };
48|
49|  const memoItems = [
50|    { id: 'vision', icon: Target, title: 'Notre vision', summary: 'Révéler la capacité de contribution de chacun', color: 'bg-[#0b2a55]' },
51|    { id: 'paradigme', icon: TrendingUp, title: 'Changement de paradigme', summary: 'De l\'insertion à la contribution', color: 'bg-orange-500' },
52|    { id: 'methode', icon: Compass, title: 'Notre méthode', summary: 'Structurer la personne pour sécuriser les trajectoires', color: 'bg-teal-500' },
53|    { id: 'grandir', icon: Lightbulb, title: 'Faire grandir', summary: 'Accompagner sans faire à la place', color: 'bg-purple-500' },
54|    { id: 'systemique', icon: Globe, title: 'Approche systémique', summary: 'Développement intérieur, capacité professionnelle, utilité sociale', color: 'bg-rose-500' },
55|    { id: 'espaces', icon: Users, title: 'Bâtir des espaces', summary: 'Structurer les adultes de demain', color: 'bg-amber-500' },
56|  ];
57|
58|  return (
59|    <div className="min-h-screen bg-gray-50">
60|      {/* Header avec image de fond */}
61|      <header className="relative bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-20">
62|        <div className="absolute inset-0 opacity-20">
63|          <img 
64|            src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBkaXZlcnNlJTIwcGVvcGxlfGVufDB8fHx8MTc3MDQ2MzkyNXww&ixlib=rb-4.1.0&q=85" 
65|            alt="" 
66|            className="w-full h-full object-cover"
67|          />
68|        </div>
69|        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
70|          <Eye className="w-16 h-16 mx-auto mb-6 opacity-70" />
71|          <h1 className="text-3xl md:text-5xl font-bold mb-6">Vision et méthode</h1>
72|          <p className="text-xl text-blue-100 italic max-w-3xl mx-auto leading-relaxed">
73|            Accompagner une personne, ce n&apos;est pas seulement sécuriser un parcours — c&apos;est révéler sa capacité à prendre part à la construction du monde qui vient.
74|          </p>
75|        </div>
76|      </header>
77|
78|      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
79|        <div className="flex flex-col lg:flex-row gap-8">
80|          
81|          {/* Sidebar Mémo - visible uniquement sur grand écran */}
82|          <aside className="hidden lg:block lg:w-80 flex-shrink-0">
83|            <div className="sticky top-24">
84|              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
85|                {/* Header du mémo */}
86|                <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-5 py-4">
87|                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
88|                    <Eye className="w-5 h-5" />
89|                    En résumé
90|                  </h3>
91|                  <p className="text-blue-200 text-sm mt-1">Les points clés de notre approche</p>
92|                </div>
93|                
94|                {/* Liste des sections */}
95|                <div className="p-3">
96|                  {memoItems.map((item) => {
97|                    const Icon = item.icon;
98|                    const isActive = activeSection === item.id;
99|                    return (
100|                      <button
101|                        key={item.id}
102|                        onClick={() => scrollToSection(item.id)}
103|                        className={`w-full text-left p-3 rounded-xl mb-2 transition-all duration-300 group ${
104|                          isActive 
105|                            ? 'bg-[#0b2a55]/10 border-l-4 border-[#0b2a55]' 
106|                            : 'hover:bg-gray-50 border-l-4 border-transparent'
107|                        }`}
108|                      >
109|                        <div className="flex items-start gap-3">
110|                          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 ${
111|                            isActive ? 'scale-110' : 'group-hover:scale-105'
112|                          } transition-transform duration-200`}>
113|                            <Icon className="w-4 h-4 text-white" />
114|                          </div>
115|                          <div className="flex-1 min-w-0">
116|                            <p className={`font-semibold text-sm ${isActive ? 'text-[#0b2a55]' : 'text-gray-800'}`}>
117|                              {item.title}
118|                            </p>
119|                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
120|                              {item.summary}
121|                            </p>
122|                          </div>
123|                          <ChevronRight className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
124|                            isActive ? 'translate-x-1 text-[#0b2a55]' : ''
125|                          }`} />
126|                        </div>
127|                      </button>
128|                    );
129|                  })}
130|                </div>
131|
132|                {/* Citation */}
133|                <div className="px-5 pb-5">
134|                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
135|                    <p className="text-sm text-gray-700 italic leading-relaxed">
136|                      &quot;Reconnaître la capacité là où d&apos;autres voient la limite.&quot;
137|                    </p>
138|                    <p className="text-xs text-amber-700 mt-2 font-medium">— Notre ambition</p>
139|                  </div>
140|                </div>
141|              </div>
142|            </div>
143|          </aside>
144|
145|          {/* Contenu principal */}
146|          <main className="flex-1 min-w-0">
147|            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
148|              <div className="p-8 md:p-12 space-y-12">
149|                
150|                {/* Introduction */}
151|                <section id="intro">
152|                  <p className="text-gray-700 leading-relaxed text-lg">
153|                    Les fragilités que connaissent aujourd&apos;hui nombre de nos institutions, de nos organisations, mais aussi de nos concitoyens, ne sont pas apparues soudainement ; elles s&apos;inscrivent dans des transformations profondes engagées depuis plusieurs années. Dans un monde marqué par des mutations économiques, technologiques et sociales durables, ces tensions nous invitent à repenser avec lucidité nos manières d&apos;accompagner, de former et de faire société.
154|                  </p>
155|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
156|                    C&apos;est face à cette réalité que s&apos;enracine la conviction d&apos;<strong className="text-[#0b2a55]">ALT&amp;ACT</strong> : les défis de notre époque ne pourront être relevés uniquement par des réponses techniques ou par la multiplication des dispositifs. Ils appellent une compréhension renouvelée de l&apos;être humain, de ses capacités et de sa place dans la construction du bien commun.
157|                  </p>
158|                </section>
159|
160|                {/* Image section - Équipe diverse */}
161|                <div className="relative rounded-2xl overflow-hidden shadow-lg">
162|                  <img 
163|                    src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBkaXZlcnNlJTIwcGVvcGxlfGVufDB8fHx8MTc3MDQ2MzkyNXww&ixlib=rb-4.1.0&q=85" 
164|                    alt="Équipe diverse collaborant ensemble" 
165|                    className="w-full h-64 md:h-80 object-cover"
166|                  />
167|                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/70 to-transparent flex items-end">
168|                    <p className="p-6 text-white text-lg font-medium">
169|                      La force du collectif au service du développement de chacun
170|                    </p>
171|                  </div>
172|                </div>
173|
174|                {/* Notre vision */}
175|                <section id="vision">
176|                  <div className="flex items-center gap-3 mb-4">
177|                    <div className="w-10 h-10 rounded-lg bg-[#0b2a55] flex items-center justify-center">
178|                      <Target className="w-5 h-5 text-white" />
179|                    </div>
180|                    <h2 className="text-2xl font-bold text-[#0b2a55]">Notre vision : révéler la capacité de contribution</h2>
181|                  </div>
182|                  <p className="text-gray-700 leading-relaxed text-lg">
183|                    Nous faisons le choix de porter un regard différent sur les femmes et les hommes que nous accompagnons. Là où certains ne perçoivent que des fragilités, nous reconnaissons avant tout des capacités en devenir.
184|                  </p>
185|                  <div className="p-6 bg-blue-50 border-l-4 border-[#0b2a55] rounded-r-lg my-6">
186|                    <p className="text-gray-800 leading-relaxed text-lg italic">
187|                      Chaque personne possède un potentiel de contribution unique. Notre responsabilité est de créer les conditions permettant à ce potentiel d&apos;émerger, de se structurer et de s&apos;inscrire durablement dans la société.
188|                    </p>
189|                  </div>
190|                  <p className="text-gray-700 leading-relaxed text-lg">
191|                    Cette vision nous conduit à dépasser une approche strictement réparatrice pour privilégier une dynamique de développement. Il ne s&apos;agit pas seulement de sécuriser des parcours professionnels, mais de permettre à chacun de trouver sa juste place — une place qui conjugue utilité sociale, dignité et pouvoir d&apos;agir.
192|                  </p>
193|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
194|                    Nous portons une attention particulière à la diversité des personnes que nous accompagnons et veillons à adapter nos pratiques à la singularité de chaque parcours. Cette exigence nous conduit à développer une approche interculturelle attentive aux réalités, aux références et aux richesses liées aux origines multiples des publics que nous accueillons. Elle nous engage également à reconnaître pleinement les compétences, les talents et les ressources des personnes en situation de handicap, non comme des limites à compenser, mais comme des atouts à valoriser dans une dynamique de participation.
195|                  </p>
196|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
197|                    Convaincus que la cohésion sociale repose sur l&apos;équité, nous agissons avec détermination pour prévenir et combattre toute forme de discrimination, condition indispensable à une participation pleine et entière à la vie collective. Car une société plus juste n&apos;est pas seulement celle qui protège — c&apos;est celle qui sait reconnaître les capacités de chacun et lui permettre de contribuer.
198|                  </p>
199|                </section>
200|
201|                {/* Changement de paradigme */}
202|                <section id="paradigme">
203|                  <div className="flex items-center gap-3 mb-4">
204|                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
205|                      <TrendingUp className="w-5 h-5 text-white" />
206|                    </div>
207|                    <h2 className="text-2xl font-bold text-[#0b2a55]">Un changement de paradigme : de l&apos;insertion à la contribution</h2>
208|                  </div>
209|                  <p className="text-gray-700 leading-relaxed text-lg">
210|                    Pendant longtemps, l&apos;accompagnement s&apos;est principalement organisé autour d&apos;un objectif : favoriser l&apos;accès à l&apos;emploi. Cet objectif demeure essentiel, mais il ne suffit plus à répondre aux réalités d&apos;un monde caractérisé par l&apos;incertitude et la transformation rapide des trajectoires professionnelles.
211|                  </p>
212|                  <div className="p-6 bg-gradient-to-r from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl my-6">
213|                    <p className="text-gray-800 leading-relaxed text-lg font-medium">
214|                      ALT&amp;ACT s&apos;inscrit dans une évolution majeure : passer d&apos;une logique d&apos;insertion à une logique de contribution.
215|                    </p>
216|                  </div>
217|                  <p className="text-gray-700 leading-relaxed text-lg">
218|                    Nous considérons que les personnes ne sont pas uniquement des bénéficiaires de dispositifs ; elles sont des acteurs potentiels de transformation sociale. Lorsque la confiance rencontre la responsabilité, elle fait naître l&apos;engagement. Et lorsque l&apos;engagement s&apos;enracine dans un collectif, il devient une force de progrès partagé.
219|                  </p>
220|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
221|                    Accompagner, pour nous, ne consiste pas simplement à intégrer une personne dans un système existant, mais à l&apos;aider à devenir suffisamment solide pour y prendre part activement — et, parfois, pour le faire évoluer.
222|                  </p>
223|                </section>
224|
225|                {/* Image section - Accompagnement professionnel */}
226|                <div className="grid md:grid-cols-2 gap-6">
227|                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
228|                    <img 
229|                      src="https://images.unsplash.com/photo-1758518727600-2c5f48419eac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwYnVzaW5lc3MlMjBkaXNjdXNzaW9uJTIwb2ZmaWNlfGVufDB8fHx8MTc3MDQ2Mzk0Mnww&ixlib=rb-4.1.0&q=85" 
230|                      alt="Accompagnement professionnel" 
231|                      className="w-full h-48 md:h-56 object-cover"
232|                    />
233|                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
234|                      <p className="p-4 text-white text-sm font-medium">
235|                        Accompagnement personnalisé
236|                      </p>
237|                    </div>
238|                  </div>
239|                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
240|                    <img 
241|                      src="https://images.unsplash.com/photo-1758518726869-01aff69a56e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwYnVzaW5lc3MlMjBkaXNjdXNzaW9uJTIwb2ZmaWNlfGVufDB8fHx8MTc3MDQ2Mzk0Mnww&ixlib=rb-4.1.0&q=85" 
242|                      alt="Discussion et échange professionnel" 
243|                      className="w-full h-48 md:h-56 object-cover"
244|                    />
245|                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
246|                      <p className="p-4 text-white text-sm font-medium">
247|                        Dialogue et co-construction
248|                      </p>
249|                    </div>
250|                  </div>
251|                </div>
252|
253|                {/* Notre méthode */}
254|                <section id="methode">
255|                  <div className="flex items-center gap-3 mb-4">
256|                    <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
257|                      <Compass className="w-5 h-5 text-white" />
258|                    </div>
259|                    <h2 className="text-2xl font-bold text-[#0b2a55]">Notre méthode : structurer la personne pour sécuriser les trajectoires</h2>
260|                  </div>
261|                  <p className="text-gray-700 leading-relaxed text-lg">
262|                    Les parcours professionnels sont de moins en moins linéaires. Dans ce paysage, la compétence technique seule ne garantit plus la stabilité. Ce qui fait désormais la différence, c&apos;est la capacité d&apos;une personne à s&apos;orienter, à s&apos;adapter et à traverser les transitions.
263|                  </p>
264|                  <div className="p-6 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg my-6">
265|                    <p className="text-gray-800 leading-relaxed text-lg italic">
266|                      C&apos;est pourquoi notre méthode repose sur un principe fondamental : le développement humain constitue le premier levier d&apos;inclusion durable.
267|                    </p>
268|                  </div>
269|                  <p className="text-gray-700 leading-relaxed text-lg">
270|                    Nous accompagnons les personnes dans un processus qui vise à renforcer la conscience de leurs ressources, développer leur maturité personnelle et relationnelle, soutenir leur autonomie, cultiver le sens de la responsabilité et favoriser leur capacité à coopérer et à contribuer. Cette démarche prend forme à travers un accompagnement attentif aux singularités, des espaces favorisant l&apos;expérimentation et la coopération, ainsi qu&apos;une relation fondée sur la confiance, la responsabilité et la réciprocité.
271|                  </p>
272|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
273|                    Notre approche ne se limite pas à préparer à un emploi ; elle vise à former des adultes capables d&apos;évoluer dans un monde complexe sans perdre leur direction.
274|                  </p>
275|                </section>
276|
277|                {/* Faire grandir */}
278|                <section id="grandir">
279|                  <div className="flex items-center gap-3 mb-4">
280|                    <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
281|                      <Lightbulb className="w-5 h-5 text-white" />
282|                    </div>
283|                    <h2 className="text-2xl font-bold text-[#0b2a55]">Faire grandir plutôt que faire à la place</h2>
284|                  </div>
285|                  <p className="text-gray-700 leading-relaxed text-lg">
286|                    Nous privilégions une posture d&apos;accompagnement qui encourage l&apos;initiative et l&apos;appropriation des parcours. Il ne s&apos;agit pas de faire pour, mais de faire grandir.
287|                  </p>
288|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
289|                    Cette exigence repose sur une certitude : la dignité se renforce lorsque chacun se découvre utile. Le sentiment de contribution restaure la confiance, soutient l&apos;engagement et participe à la construction d&apos;identités professionnelles plus solides.
290|                  </p>
291|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
292|                    Ainsi, nous cherchons moins à orienter qu&apos;à éveiller, moins à prescrire qu&apos;à rendre chacun auteur de sa trajectoire.
293|                  </p>
294|                </section>
295|
296|                {/* Image section - Solidarité */}
297|                <div className="relative rounded-2xl overflow-hidden shadow-lg">
298|                  <img 
299|                    src="https://images.unsplash.com/photo-1758599669186-9eaf14f6f3ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxoZWxwaW5nJTIwaGFuZHMlMjBzdXBwb3J0JTIwY29tbXVuaXR5JTIwc29saWRhcml0eXxlbnwwfHx8fDE3NzA0NjM5Mzh8MA&ixlib=rb-4.1.0&q=85" 
300|                    alt="Solidarité et engagement communautaire" 
301|                    className="w-full h-64 md:h-72 object-cover"
302|                  />
303|                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/70 to-transparent flex items-end">
304|                    <p className="p-6 text-white text-lg font-medium">
305|                      S&apos;engager ensemble pour un impact durable
306|                    </p>
307|                  </div>
308|                </div>
309|
310|                {/* Approche systémique */}
311|                <section id="systemique">
312|                  <div className="flex items-center gap-3 mb-4">
313|                    <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center">
314|                      <Globe className="w-5 h-5 text-white" />
315|                    </div>
316|                    <h2 className="text-2xl font-bold text-[#0b2a55]">Une approche systémique et profondément humaine</h2>
317|                  </div>
318|                  <p className="text-gray-700 leading-relaxed text-lg">
319|                    Les difficultés professionnelles sont rarement uniquement professionnelles. Elles s&apos;inscrivent dans des réalités plus larges — personnelles, sociales, parfois culturelles — qui appellent une lecture globale des situations.
320|                  </p>
321|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
322|                    Notre action vise donc à articuler trois dimensions indissociables : le développement intérieur, la capacité professionnelle et l&apos;utilité sociale. Cet équilibre permet de sécuriser les parcours sans enfermer les destinées et d&apos;ouvrir des perspectives durables.
323|                  </p>
324|                </section>
325|
326|                {/* Bâtir des espaces */}
327|                <section id="espaces">
328|                  <div className="flex items-center gap-3 mb-4">
329|                    <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
330|                      <Users className="w-5 h-5 text-white" />
331|                    </div>
332|                    <h2 className="text-2xl font-bold text-[#0b2a55]">Bâtir des espaces qui structurent les adultes de demain</h2>
333|                  </div>
334|                  <p className="text-gray-700 leading-relaxed text-lg">
335|                    À mesure que certains repères collectifs se fragilisent, notre société a besoin de lieux capables de redonner du sens, de soutenir la responsabilité et de favoriser la maturation des individus.
336|                  </p>
337|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
338|                    <strong className="text-[#0b2a55]">ALT&amp;ACT</strong> aspire à être l&apos;un de ces espaces.
339|                  </p>
340|                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
341|                    Plus qu&apos;un acteur de l&apos;accompagnement, nous souhaitons contribuer à l&apos;émergence d&apos;une société où chacun peut non seulement trouver sa voie, mais aussi se sentir légitime pour participer à un projet commun. Car nous sommes convaincus que l&apos;avenir ne se construira pas uniquement par l&apos;innovation technologique ou économique, mais par la capacité des femmes et des hommes à grandir, à coopérer et à prendre part à la transformation du monde.
342|                  </p>
343|                </section>
344|
345|                {/* Notre ambition */}
346|                <section id="ambition" className="mt-12">
347|                  <div className="p-8 bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-2xl text-white">
348|                    <h2 className="text-2xl font-bold mb-6 text-center">Notre ambition</h2>
349|                    <div className="space-y-4 text-lg text-blue-100 text-center">
350|                      <p>Reconnaître la capacité là où d&apos;autres voient la limite,</p>
351|                      <p>sécuriser les parcours sans enfermer les destinées,</p>
352|                      <p>transformer les obstacles — notamment les discriminations — en leviers de justice et de participation.</p>
353|                    </div>
354|                    <div className="mt-8 pt-6 border-t border-white/20 text-center">
355|                      <p className="text-white font-medium">Telle est la vision qui guide ALT&amp;ACT.</p>
356|                      <p className="text-white font-medium">Telle est la méthode qui structure notre engagement.</p>
357|                      <p className="text-blue-100 mt-4 italic">
358|                        Accompagner, pour nous, n&apos;est pas seulement une mission —<br />
359|                        c&apos;est une contribution à la société de demain.
360|                      </p>
361|                    </div>
362|                  </div>
363|                </section>
364|
365|              </div>
366|            </div>
367|
368|            <div className="mt-8 flex items-center justify-start">
369|              <Button onClick={handleBackHome} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white">
370|                <ArrowLeft className="w-4 h-4 mr-2" />
371|                Retour à l&apos;accueil
372|              </Button>
373|            </div>
374|          </main>
375|        </div>
376|      </div>
377|    </div>
378|  );
379|}
380|
381|export default VisionMethode;

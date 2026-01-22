Ah désolé ! Voici le **CODE COMPLET** à copier-coller :
Action: file_editor view /tmp/ImpactSection-NOUVEAU.jsx
Observation: /tmp/ImpactSection-NOUVEAU.jsx:
1|import React from 'react';
2|import { Shield, Award, TrendingUp, Users, Target, CheckCircle, Heart, Building2 } from 'lucide-react';
3|
4|const ImpactSection = () => {
5|  return (
6|    <section id="impact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
7|      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
8|        {/* Section Header */}
9|        <div className="text-center mb-16 animate-fade-in">
10|          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
11|            <TrendingUp className="w-4 h-4 text-[#0b2a55]" />
12|            <span className="text-[#0b2a55] text-sm font-semibold">IMPACT SOCIÉTAL</span>
13|          </div>
14|          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
15|            Impact sociétal
16|          </h2>
17|          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
18|            Une action d'intérêt général portée par l'association Alt&Act
19|          </p>
20|        </div>
21|
22|        {/* Introduction */}
23|        <div className="mb-16">
24|          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
25|            <p className="text-gray-700 leading-relaxed text-lg mb-6">
26|              L'association <strong className="text-[#0b2a55]">Alt&Act</strong> agit en faveur de l'<strong>insertion professionnelle durable</strong> et 
27|              du <strong>bien-être au travail</strong>, en développant des actions répondant aux besoins essentiels des citoyens confrontés 
28|              aux mutations du monde du travail : recherche d'emploi, accès à la formation, reconversion professionnelle, 
29|              sécurisation des parcours et maintien dans l'emploi.
30|            </p>
31|            <p className="text-gray-700 leading-relaxed text-lg mb-6">
32|              Son action s'adresse à <strong className="text-[#0b2a55]">tous les publics</strong>, sans distinction d'âge, de niveau de qualification 
33|              ou de parcours, avec une attention particulière portée aux situations de fragilisation liées aux ruptures professionnelles, 
34|              aux transitions contraintes ou aux discriminations structurelles.
35|            </p>
36|            <div className="p-6 bg-gradient-to-r from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl border-l-4 border-[#0b2a55]">
37|              <p className="text-gray-800 leading-relaxed text-lg font-semibold">
38|                Alt&Act inscrit son intervention dans une logique d'<strong>intérêt général</strong>, visant à renforcer 
39|                la capacité de chacun à trouver une place professionnelle choisie, utile et socialement reconnue.
40|              </p>
41|            </div>
42|          </div>
43|        </div>
44|
45|        {/* Collaboration RE'ACTIF PRO */}
46|        <div className="mb-16">
47|          <div className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white rounded-2xl shadow-2xl overflow-hidden">
48|            <div className="grid md:grid-cols-2 gap-0">
49|              <div className="p-8 md:p-12">
50|                <div className="flex items-center gap-3 mb-6">
51|                  <Building2 className="w-10 h-10" />
52|                  <h3 className="text-3xl font-bold">Une collaboration structurante avec RE'ACTIF PRO</h3>
53|                </div>
54|                <p className="text-blue-100 leading-relaxed text-lg mb-6">
55|                  Dans le cadre de ses actions, l'association Alt&Act s'appuie sur une collaboration étroite avec la société 
56|                  <strong className="text-white"> RE'ACTIF PRO</strong>, qui développe des outils et des dispositifs innovants 
57|                  destinés à activer concrètement les parcours d'insertion et de transition professionnelle.
58|                </p>
59|                <div className="space-y-4">
60|                  <p className="text-white font-semibold">Cette collaboration permet de combiner :</p>
61|                  <ul className="space-y-3">
62|                    <li className="flex items-start gap-3">
63|                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
64|                      <span className="text-blue-100">l'expertise méthodologique et l'ancrage éthique portés par Alt&Act,</span>
65|                    </li>
66|                    <li className="flex items-start gap-3">
67|                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
68|                      <span className="text-blue-100">les solutions opérationnelles, numériques et organisationnelles développées par RE'ACTIF PRO.</span>
69|                    </li>
70|                  </ul>
71|                </div>
72|              </div>
73|              <div className="relative h-64 md:h-auto">
74|                <img 
75|                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
76|                  alt="Collaboration et innovation"
77|                  className="absolute inset-0 w-full h-full object-cover"
78|                />
79|                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/80 to-transparent"></div>
80|              </div>
81|            </div>
82|          </div>
83|        </div>
84|
85|        {/* Avancées concrètes */}
86|        <div className="mb-16">
87|          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
88|            Des avancées au service des citoyens
89|          </h3>
90|          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-center max-w-3xl mx-auto">
91|            Les dispositifs développés dans le cadre de RE'ACTIF PRO, et mobilisés par Alt&Act, ont permis des avancées 
92|            significatives en matière d'impact social et d'efficacité opérationnelle :
93|          </p>
94|          
95|          <div className="grid md:grid-cols-2 gap-6">
96|            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-300">
97|              <div className="flex items-start gap-4">
98|                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
99|                  <TrendingUp className="w-6 h-6 text-orange-600" />
100|                </div>
101|                <div>
102|                  <h4 className="font-bold text-gray-900 mb-2">Activation rapide des parcours</h4>
103|                  <p className="text-gray-600">Réduction significative des délais entre orientation et mise en relation avec les entreprises.</p>
104|                </div>
105|              </div>
106|            </div>
107|
108|            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
109|              <div className="flex items-start gap-4">
110|                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
111|                  <Users className="w-6 h-6 text-blue-600" />
112|                </div>
113|                <div>
114|                  <h4 className="font-bold text-gray-900 mb-2">Reconnaissance des contributeurs sociétaux</h4>
115|                  <p className="text-gray-600">Les personnes accompagnées sont reconnues comme contributeurs en transition, non comme usagers passifs.</p>
116|                </div>
117|              </div>
118|            </div>
119|
120|            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300">
121|              <div className="flex items-start gap-4">
122|                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
123|                  <Award className="w-6 h-6 text-green-600" />
124|                </div>
125|                <div>
126|                  <h4 className="font-bold text-gray-900 mb-2">Immersions professionnelles certifiantes</h4>
127|                  <p className="text-gray-600">Développement de dispositifs favorisant l'accès à l'emploi durable par l'expérience terrain.</p>
128|                </div>
129|              </div>
130|            </div>
131|
132|            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300">
133|              <div className="flex items-start gap-4">
134|                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
135|                  <Target className="w-6 h-6 text-purple-600" />
136|                </div>
137|                <div>
138|                  <h4 className="font-bold text-gray-900 mb-2">Anticipation territoriale</h4>
139|                  <p className="text-gray-600">Identification proactive des besoins en compétences à l'échelle des territoires.</p>
140|                </div>
141|              </div>
142|            </div>
143|          </div>
144|        </div>
145|
146|        {/* Conduite éthique */}
147|        <div className="mb-16">
148|          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12">
149|            <div className="flex items-center gap-3 mb-6">
150|              <Shield className="w-10 h-10 text-[#0b2a55]" />
151|              <h3 className="text-3xl font-bold text-gray-900">Une conduite éthique garantie par Alt&Act</h3>
152|            </div>
153|            <p className="text-gray-700 leading-relaxed text-lg mb-6">
154|              L'association Alt&Act assure la conduite éthique des actions mises en œuvre, en veillant notamment à :
155|            </p>
156|            <div className="grid md:grid-cols-2 gap-4">
157|              <div className="flex items-start gap-3">
158|                <CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-1" />
159|                <span className="text-gray-700">la <strong>primauté de l'humain</strong> sur les outils,</span>
160|              </div>
161|              <div className="flex items-start gap-3">
162|                <CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-1" />
163|                <span className="text-gray-700">le respect de la <strong>dignité et de l'autonomie</strong> des personnes,</span>
164|              </div>
165|              <div className="flex items-start gap-3">
166|                <CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-1" />
167|                <span className="text-gray-700">l'absence de toute <strong>stigmatisation ou discrimination</strong>,</span>
168|              </div>
169|              <div className="flex items-start gap-3">
170|                <CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-1" />
171|                <span className="text-gray-700">la <strong>transparence</strong> des usages numériques et dispositifs.</span>
172|              </div>
173|            </div>
174|            <p className="text-gray-700 leading-relaxed text-lg mt-6">
175|              Les services proposés s'inscrivent dans une logique d'<strong className="text-[#0b2a55]">accessibilité universelle</strong>, 
176|              de protection des données et de supervision humaine, garantissant une utilisation responsable des outils technologiques 
177|              au service de l'insertion professionnelle.
178|            </p>
179|          </div>
180|        </div>
181|
182|        {/* Impact mesurable */}
183|        <div className="relative">
184|          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a55]/5 to-[#1a4280]/5 rounded-3xl transform -rotate-1"></div>
185|          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
186|            <div className="flex items-center gap-3 mb-6">
187|              <Heart className="w-10 h-10 text-[#0b2a55]" />
188|              <h3 className="text-3xl font-bold text-gray-900">Un impact mesurable et durable</h3>
189|            </div>
190|            <p className="text-gray-700 leading-relaxed text-lg mb-6">
191|              À travers cette articulation entre engagement associatif et innovation opérationnelle, Alt&Act contribue à :
192|            </p>
193|            <div className="grid md:grid-cols-2 gap-6">
194|              <div className="flex items-start gap-3">
195|                <div className="w-8 h-8 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
196|                  <CheckCircle className="w-5 h-5 text-[#0b2a55]" />
197|                </div>
198|                <div>
199|                  <h4 className="font-bold text-gray-900 mb-1">Sécurisation des parcours professionnels</h4>
200|                  <p className="text-gray-600">Accompagnement durable et adapté aux transitions</p>
201|                </div>
202|              </div>
203|              <div className="flex items-start gap-3">
204|                <div className="w-8 h-8 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
205|                  <CheckCircle className="w-5 h-5 text-[#0b2a55]" />
206|                </div>
207|                <div>
208|                  <h4 className="font-bold text-gray-900 mb-1">Renforcement de l'estime de soi</h4>
209|                  <p className="text-gray-600">Reconstruction de l'identité professionnelle</p>
210|                </div>
211|              </div>
212|              <div className="flex items-start gap-3">
213|                <div className="w-8 h-8 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
214|                  <CheckCircle className="w-5 h-5 text-[#0b2a55]" />
215|                </div>
216|                <div>
217|                  <h4 className="font-bold text-gray-900 mb-1">Insertion professionnelle durable</h4>
218|                  <p className="text-gray-600">Emplois choisis et socialement reconnus</p>
219|                </div>
220|              </div>
221|              <div className="flex items-start gap-3">
222|                <div className="w-8 h-8 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
223|                  <CheckCircle className="w-5 h-5 text-[#0b2a55]" />
224|                </div>
225|                <div>
226|                  <h4 className="font-bold text-gray-900 mb-1">Amélioration de la qualité de vie</h4>
227|                  <p className="text-gray-600">Bien-être au travail et contribution à la société</p>
228|                </div>
229|              </div>
230|            </div>
231|            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
232|              <p className="text-gray-800 leading-relaxed text-lg text-center italic">
233|                Cette dynamique d'impact s'inscrit dans une perspective de <strong className="text-[#0b2a55]">transformation sociale durable</strong>, 
234|                au service des individus, des territoires et du bien commun.
235|              </p>
236|            </div>
237|          </div>
238|        </div>
239|
240|        {/* Collaboration RE'ACTIF PRO avec image */}
241|        <div className="grid md:grid-cols-2 gap-8 mb-16">
242|          <div className="relative rounded-2xl overflow-hidden shadow-xl">
243|            <img 
244|              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
245|              alt="Collaboration professionnelle"
246|              className="w-full h-full object-cover"
247|            />
248|            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/70 to-transparent"></div>
249|          </div>
250|          <div className="flex flex-col justify-center">
251|            <h3 className="text-2xl font-bold text-gray-900 mb-4">
252|              RE'ACTIF PRO : Outil de mise en action
253|            </h3>
254|            <p className="text-gray-700 leading-relaxed mb-4">
255|              RE'ACTIF PRO intervient comme <strong>outil de mise en action</strong>, complémentaire aux politiques 
256|              publiques existantes, en facilitant le passage de l'orientation à l'emploi, et en réduisant les délais 
257|              d'accès à des opportunités professionnelles concrètes.
258|            </p>
259|          </div>
260|        </div>
261|
262|        {/* Avancées concrètes */}
263|        <div className="mb-16">
264|          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
265|            Des avancées au service des citoyens
266|          </h3>
267|          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-center max-w-3xl mx-auto">
268|            Les dispositifs développés ont permis des avancées significatives en matière d'impact social et d'efficacité opérationnelle.
269|          </p>
270|          
271|          <div className="grid md:grid-cols-2 gap-6">
272|            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-300">
273|              <div className="flex items-start gap-4">
274|                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
275|                  <TrendingUp className="w-6 h-6 text-orange-600" />
276|                </div>
277|                <div>
278|                  <h4 className="font-bold text-gray-900 mb-2">Activation rapide des parcours</h4>
279|                  <p className="text-gray-600">Réduction significative des délais entre orientation et mise en relation avec les entreprises.</p>
280|                </div>
281|              </div>
282|            </div>
283|
284|            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
285|              <div className="flex items-start gap-4">
286|                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
287|                  <Users className="w-6 h-6 text-blue-600" />
288|                </div>
289|                <div>
290|                  <h4 className="font-bold text-gray-900 mb-2">Contributeurs sociétaux</h4>
291|                  <p className="text-gray-600">Reconnaissance des personnes accompagnées comme acteurs en transition, non comme usagers passifs.</p>
292|                </div>
293|              </div>
294|            </div>
295|
296|            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300">
297|              <div className="flex items-start gap-4">
298|                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
299|                  <Award className="w-6 h-6 text-green-600" />
300|                </div>
301|                <div>
302|                  <h4 className="font-bold text-gray-900 mb-2">Immersions professionnelles certifiantes</h4>
303|                  <p className="text-gray-600">Dispositifs favorisant l'accès à l'emploi durable par l'expérience terrain.</p>
304|                </div>
305|              </div>
306|            </div>
307|
308|            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300">
309|              <div className="flex items-start gap-4">
310|                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
311|                  <Target className="w-6 h-6 text-purple-600" />
312|                </div>
313|                <div>
314|                  <h4 className="font-bold text-gray-900 mb-2">Anticipation territoriale</h4>
315|                  <p className="text-gray-600">Identification proactive des besoins en compétences à l'échelle des territoires.</p>
316|                </div>
317|              </div>
318|            </div>
319|          </div>
320|        </div>
321|
322|        {/* Conduite éthique */}
323|        <div className="mb-16">
324|          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12">
325|            <div className="flex items-center gap-3 mb-6">
326|              <Shield className="w-10 h-10 text-[#0b2a55]" />
327|              <h3 className="text-3xl font-bold text-gray-900">Une conduite éthique garantie</h3>
328|            </div>
329|            <p className="text-gray-700 leading-relaxed text-lg mb-6">
330|              L'association Alt&Act assure la conduite éthique des actions mises en œuvre, en veillant notamment à :
331|            </p>
332|            <div className="grid md:grid-cols-2 gap-4">
333|              <div className="flex items-start gap-3">
334|                <CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-1" />
335|                <span className="text-gray-700">la <strong>primauté de l'humain</strong> sur les outils,</span>
336|              </div>
337|              <div className="flex items-start gap-3">
338|                <CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-1" />
339|                <span className="text-gray-700">le respect de la <strong>dignité et de l'autonomie</strong> des personnes,</span>
340|              </div>
341|              <div className="flex items-start gap-3">
342|                <CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-1" />
343|                <span className="text-gray-700">l'absence de toute <strong>stigmatisation ou discrimination</strong>,</span>
344|              </div>
345|              <div className="flex items-start gap-3">
346|                <CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-1" />
347|                <span className="text-gray-700">la <strong>transparence</strong> des usages numériques et dispositifs.</span>
348|              </div>
349|            </div>
350|            <p className="text-gray-700 leading-relaxed text-lg mt-6">
351|              Les services proposés s'inscrivent dans une logique d'<strong className="text-[#0b2a55]">accessibilité universelle</strong>, 
352|              de protection des données et de supervision humaine.
353|            </p>
354|          </div>
355|        </div>
356|
357|        {/* Impact mesurable */}
358|        <div className="relative">
359|          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a55]/5 to-[#1a4280]/5 rounded-3xl transform -rotate-1"></div>
360|          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
361|            <div className="flex items-center gap-3 mb-6">
362|              <Heart className="w-10 h-10 text-[#0b2a55]" />
363|              <h3 className="text-3xl font-bold text-gray-900">Un impact mesurable et durable</h3>
364|            </div>
365|            <p className="text-gray-700 leading-relaxed text-lg mb-6">
366|              À travers cette articulation entre engagement associatif et innovation opérationnelle, Alt&Act contribue à :
367|            </p>
368|            <div className="grid md:grid-cols-2 gap-6">
369|              <div className="flex items-start gap-3">
370|                <div className="w-8 h-8 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
371|                  <CheckCircle className="w-5 h-5 text-[#0b2a55]" />
372|                </div>
373|                <div>
374|                  <h4 className="font-bold text-gray-900 mb-1">Sécuriser les parcours professionnels</h4>
375|                  <p className="text-gray-600">Accompagnement durable et adapté aux transitions</p>
376|                </div>
377|              </div>
378|              <div className="flex items-start gap-3">
379|                <div className="w-8 h-8 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
380|                  <CheckCircle className="w-5 h-5 text-[#0b2a55]" />
381|                </div>
382|                <div>
383|                  <h4 className="font-bold text-gray-900 mb-1">Renforcer l'estime de soi</h4>
384|                  <p className="text-gray-600">Reconstruction de l'identité professionnelle</p>
385|                </div>
386|              </div>
387|              <div className="flex items-start gap-3">
388|                <div className="w-8 h-8 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
389|                  <CheckCircle className="w-5 h-5 text-[#0b2a55]" />
390|                </div>
391|                <div>
392|                  <h4 className="font-bold text-gray-900 mb-1">Favoriser l'insertion durable</h4>
393|                  <p className="text-gray-600">Emplois choisis et socialement reconnus</p>
394|                </div>
395|              </div>
396|              <div className="flex items-start gap-3">
397|                <div className="w-8 h-8 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
398|                  <CheckCircle className="w-5 h-5 text-[#0b2a55]" />
399|                </div>
400|                <div>
401|                  <h4 className="font-bold text-gray-900 mb-1">Améliorer la qualité de vie</h4>
402|                  <p className="text-gray-600">Bien-être au travail et contribution à la société</p>
403|                </div>
404|              </div>
405|            </div>
406|            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
407|              <p className="text-gray-800 leading-relaxed text-lg text-center italic">
408|                Cette dynamique d'impact s'inscrit dans une perspective de <strong className="text-[#0b2a55]">transformation sociale durable</strong>, 
409|                au service des individus, des territoires et du bien commun.
410|              </p>
411|            </div>
412|          </div>
413|        </div>
414|
415|      </div>
416|    </section>
417|  );
418|};
419|
420|export default ImpactSection;
421|

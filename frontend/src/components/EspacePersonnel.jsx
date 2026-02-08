**Emplacement :** `frontend/src/components/EspacePersonnel.jsx`

Créez un nouveau fichier à cet endroit et collez ce code :
Action: file_editor view /app/frontend/public/EspacePersonnel.jsx
Observation: /app/frontend/public/EspacePersonnel.jsx:
1|import React, { useEffect } from 'react';
2|import { ArrowLeft, User, Shield, Heart, Compass, Scale, Brain, Phone, FileText, CheckCircle, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
3|import { Button } from './ui/button';
4|import { useNavigate } from 'react-router-dom';
5|import { Badge } from './ui/badge';
6|import { Card, CardContent } from './ui/card';
7|
8|const EspacePersonnel = () => {
9|  const navigate = useNavigate();
10|  
11|  useEffect(() => {
12|    window.scrollTo(0, 0);
13|  }, []);
14|
15|  const handleBackHome = () => {
16|    navigate('/');
17|  };
18|
19|  const services = [
20|    {
21|      id: 1,
22|      title: "Conseil et protection juridique",
23|      subtitle: "Vos droits, notre priorité",
24|      icon: Scale,
25|      color: "blue",
26|      description: "Nous vous accompagnons dans la compréhension et la défense de vos droits en matière de droit du travail, de discrimination, de harcèlement ou de rupture de contrat.",
27|      points: [
28|        "Information sur vos droits et obligations",
29|        "Accompagnement dans vos démarches administratives",
30|        "Orientation vers des professionnels du droit si nécessaire",
31|        "Médiation et résolution de conflits"
32|      ],
33|      benefice: "Ne restez plus seul face aux difficultés juridiques"
34|    },
35|    {
36|      id: 2,
37|      title: "Soutien psychologique",
38|      subtitle: "Prendre soin de vous",
39|      icon: Brain,
40|      color: "rose",
41|      description: "Le bien-être mental est essentiel. Nous proposons un espace d'écoute et d'accompagnement pour traverser les moments difficiles liés au travail.",
42|      points: [
43|        "Écoute active et bienveillante",
44|        "Gestion du stress et de l'anxiété professionnelle",
45|        "Accompagnement en cas de burn-out ou épuisement",
46|        "Reconstruction de la confiance en soi"
47|      ],
48|      benefice: "Un espace sécurisé pour retrouver votre équilibre"
49|    },
50|    {
51|      id: 3,
52|      title: "(Ré)orientation professionnelle",
53|      subtitle: "Devenir auteur de votre trajectoire",
54|      icon: Compass,
55|      color: "teal",
56|      description: "Que vous souhaitiez évoluer, changer de métier ou rebondir après une rupture, nous vous aidons à révéler votre potentiel et construire votre avenir.",
57|      points: [
58|        "Bilan de compétences et de valeurs",
59|        "Exploration des possibles et des aspirations",
60|        "Construction d'un projet professionnel aligné",
61|        "Accompagnement dans la mise en oeuvre"
62|      ],
63|      benefice: "Trouvez votre voie et donnez du sens à votre parcours"
64|    },
65|    {
66|      id: 4,
67|      title: "Accompagnement RSE et sens au travail",
68|      subtitle: "Aligner vos valeurs et votre travail",
69|      icon: Heart,
70|      color: "green",
71|      description: "Vous souhaitez que votre travail ait du sens et soit en accord avec vos valeurs ? Nous vous aidons à trouver ou créer cet alignement.",
72|      points: [
73|        "Réflexion sur vos valeurs et motivations profondes",
74|        "Identification d'employeurs engagés",
75|        "Accompagnement vers des métiers à impact",
76|        "Développement de votre engagement citoyen au travail"
77|      ],
78|      benefice: "Travaillez en accord avec qui vous êtes vraiment"
79|    }
80|  ];
81|
82|  const colorClasses = {
83|    blue: { bg: "bg-blue-600", light: "bg-blue-100", text: "text-blue-700" },
84|    rose: { bg: "bg-rose-500", light: "bg-rose-100", text: "text-rose-700" },
85|    teal: { bg: "bg-teal-500", light: "bg-teal-100", text: "text-teal-700" },
86|    green: { bg: "bg-green-600", light: "bg-green-100", text: "text-green-700" }
87|  };
88|
89|  return (
90|    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
91|      <header className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white py-20 overflow-hidden">
92|        <div className="absolute inset-0 opacity-20">
93|          <img 
94|            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&w=1200" 
95|            alt="" 
96|            className="w-full h-full object-cover"
97|          />
98|        </div>
99|        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
100|          <Button variant="ghost" onClick={handleBackHome} className="text-white hover:bg-white/20 mb-6">
101|            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
102|          </Button>
103|          <div className="flex items-center gap-3 mb-4">
104|            <Badge className="bg-white/20 text-white border-white/30">
105|              <User className="w-3 h-3 mr-1" />
106|              Pour vous
107|            </Badge>
108|          </div>
109|          <h1 className="text-4xl md:text-5xl font-bold mb-6">Espace Personnel</h1>
110|          <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
111|            Un accompagnement <strong className="text-white">sur mesure</strong> pour vous aider à traverser les transitions, défendre vos droits et révéler votre potentiel.
112|          </p>
113|          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
114|            {[
115|              { value: "100%", label: "Confidentiel" },
116|              { value: "4", label: "Domaines d'aide" },
117|              { value: "24h", label: "Réponse rapide" },
118|              { value: "0", label: "Jugement" }
119|            ].map((stat, idx) => (
120|              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
121|                <p className="text-2xl font-bold text-white">{stat.value}</p>
122|                <p className="text-sm text-orange-200">{stat.label}</p>
123|              </div>
124|            ))}
125|          </div>
126|        </div>
127|      </header>
128|
129|      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
130|        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100">
131|          <div className="flex items-start gap-4">
132|            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center flex-shrink-0">
133|              <Shield className="w-7 h-7 text-white" />
134|            </div>
135|            <div>
136|              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vous n'êtes pas seul</h2>
137|              <p className="text-gray-700 leading-relaxed mb-4">
138|                Que vous soyez en poste, en transition ou en recherche d'un nouveau départ, ALT&ACT est à vos côtés. Notre approche <strong>humaniste et bienveillante</strong> place votre bien-être et votre épanouissement au centre de tout.
139|              </p>
140|              <p className="text-gray-700 leading-relaxed">
141|                Nous croyons que chaque personne porte en elle une <strong>capacité unique de contribution</strong>. Notre rôle est de vous aider à la révéler et à la déployer.
142|              </p>
143|            </div>
144|          </div>
145|        </div>
146|      </section>
147|
148|      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
149|        <div className="text-center mb-12">
150|          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos accompagnements</h2>
151|          <p className="text-gray-600 max-w-2xl mx-auto">Quatre axes pour vous soutenir dans toutes les dimensions de votre vie professionnelle</p>
152|        </div>
153|
154|        <div className="space-y-8">
155|          {services.map((service) => {
156|            const Icon = service.icon;
157|            const colors = colorClasses[service.color];
158|            return (
159|              <Card key={service.id} className="overflow-hidden border-0 shadow-lg">
160|                <CardContent className="p-0">
161|                  <div className="grid md:grid-cols-3">
162|                    <div className={`${colors.bg} p-8 text-white flex flex-col justify-center`}>
163|                      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
164|                        <Icon className="w-8 h-8" />
165|                      </div>
166|                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
167|                      <p className="text-sm opacity-90">{service.subtitle}</p>
168|                    </div>
169|                    <div className="md:col-span-2 p-8">
170|                      <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
171|                      <div className="mb-6">
172|                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Ce que nous proposons</h4>
173|                        <ul className="space-y-3">
174|                          {service.points.map((point, idx) => (
175|                            <li key={idx} className="flex items-start gap-3">
176|                              <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
177|                              <span className="text-gray-700">{point}</span>
178|                            </li>
179|                          ))}
180|                        </ul>
181|                      </div>
182|                      <div className={`${colors.light} rounded-xl p-4`}>
183|                        <p className={`font-medium ${colors.text}`}>{service.benefice}</p>
184|                      </div>
185|                    </div>
186|                  </div>
187|                </CardContent>
188|              </Card>
189|            );
190|          })}
191|        </div>
192|      </section>
193|
194|      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-16">
195|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
196|          <h2 className="text-3xl font-bold text-white mb-4">Besoin d'aide ?</h2>
197|          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
198|            Contactez-nous en toute confidentialité. Un premier échange gratuit pour comprendre votre situation et vous orienter.
199|          </p>
200|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
201|            <Button onClick={handleBackHome} className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
202|              <MessageCircle className="w-5 h-5 mr-2" />
203|              Nous contacter
204|            </Button>
205|            <Button variant="outline" onClick={() => navigate('/charte-ethique')} className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg">
206|              Notre engagement éthique
207|            </Button>
208|          </div>
209|        </div>
210|      </section>
211|
212|      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
213|        <div className="text-center mb-12">
214|          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos garanties</h2>
215|        </div>
216|        <div className="grid md:grid-cols-4 gap-6">
217|          {[
218|            { icon: Shield, title: "Confidentialité", desc: "Vos échanges restent privés" },
219|            { icon: Heart, title: "Bienveillance", desc: "Écoute sans jugement" },
220|            { icon: User, title: "Sur mesure", desc: "Adapté à votre situation" },
221|            { icon: Sparkles, title: "Humanisme", desc: "Vous au centre de tout" }
222|          ].map((value, idx) => {
223|            const Icon = value.icon;
224|            return (
225|              <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors">
226|                <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500 flex items-center justify-center mb-4">
227|                  <Icon className="w-7 h-7 text-white" />
228|                </div>
229|                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
230|                <p className="text-sm text-gray-600">{value.desc}</p>
231|              </div>
232|            );
233|          })}
234|        </div>
235|      </section>
236|
237|      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
238|        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
239|          <Button onClick={handleBackHome} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
240|            <ArrowLeft className="w-4 h-4 mr-2" />
241|            Retour
242|          </Button>
243|          <span className="text-gray-500 text-sm">Association ALT&ACT — Altérité & Action</span>
244|        </div>
245|      </div>
246|    </div>
247|  );
248|};
249|
250|export default EspacePersonnel;
251|

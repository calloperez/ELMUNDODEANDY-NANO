// ============================================================
// AUDIO DATA — narraciones del personaje Andynano, separadas de
// la lógica (app.js) y de los demás catálogos (photos.js, sports.js).
//
// Estructura por país: { es: {...}, en: {...} }
// Tipos por idioma: intro, location, capital, animal, food, sport,
// fact, celebration.
//
// IMPORTANTE — nada inventado:
// - intro / location / capital / fact / celebration: generados con
//   datos ya verificados de data.js (nombre, capital, continente,
//   dato curioso) + plantillas variadas (rotan por país para evitar
//   que las 195 narraciones empiecen igual). Listos para los 195.
// - animal / food: solo existen donde data.js ya tenía un nombre de
//   animal/comida específico verificado (hoy, los 13 países del
//   Nivel 1). Para el resto, el campo queda en null — NO se inventó
//   ningún animal o comida para completar el hueco.
// - sport: solo existe donde SPORTS_DATA (sports.js) ya tiene datos
//   verificados (hoy, 45 países). No se duplican los datos acá —
//   solo se arma la frase a partir de lo que ya existe en sports.js.
//
// Un campo en null significa "todavía no verificado", no "vacío por
// error" — la UI debe mostrar el fallback correspondiente, nunca
// romperse ni inventar contenido.
// ============================================================

const AUDIO_DATA = {
  af: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Afganistán.", location:"Afganistán está en Asia.", capital:"Su capital es Kabul.", fact:"¡Tiene montañas altísimas llamadas el Hindú Kush!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Afghanistan.", location:"Afghanistan is in Asia.", capital:"Its capital is Kabul.", fact:"It has very tall mountains called the Hindu Kush!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  ao: {
    es: { intro:"¡Nuestro próximo destino es Angola!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Luanda.", fact:"¡Tiene una catarata gigante, una de las más grandes de África!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Angola!", location:"This country is located in Africa.", capital:"The most important city is called Luanda.", fact:"It has a giant waterfall, one of the biggest in Africa!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  al: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Albania.", location:"Estamos en Europa, ¡en el país llamado Albania!", capital:"¿Sabías que la capital es Tirana?", fact:"¡Tiene playas junto al mar y montañas verdes!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Albania.", location:"We're in Europe, in the country called Albania!", capital:"Did you know the capital is Tirana?", fact:"It has beaches by the sea and green mountains!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  ad: {
    es: { intro:"¡Vamos a descubrir Andorra juntos!", location:"Andorra está en Europa.", capital:"Su capital es Andorra la Vella.", fact:"¡Está escondido entre montañas altísimas!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Andorra together!", location:"Andorra is in Europe.", capital:"Its capital is Andorra la Vella.", fact:"It's tucked away between very tall mountains!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  ae: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Emiratos Árabes Unidos.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Abu Dhabi.", fact:"¡Tiene uno de los edificios más altos del mundo!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in United Arab Emirates.", location:"This country is located in Asia.", capital:"The most important city is called Abu Dhabi.", fact:"It has one of the tallest buildings in the world!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  ar: {
    es: { intro:"¡Tenemos una nueva aventura en Argentina!", location:"Estamos en América, ¡en el país llamado Argentina!", capital:"¿Sabías que la capital es Buenos Aires?", fact:"¡Tiene glaciares gigantes de hielo!", celebration:"¡Fantástico!", animal:"¡Y mira ese animal! Es un Guanaco. ¿Podés decirlo conmigo? ¡Guanaco!", food:"¡Qué rico! En Argentina se come Empanadas argentinas.", sport:"¡Argentina juega al Fútbol! Su selección usa los colores Celeste y blanca." },
    en: { intro:"We have a new adventure in Argentina!", location:"We're in America, in the country called Argentina!", capital:"Did you know the capital is Buenos Aires?", fact:"It has giant ice glaciers!", celebration:"Fantastic!", animal:"And look at that animal! It's a Guanaco. Can you say it with me?", food:"Yum! In Argentina, people eat Argentine empanadas.", sport:"Argentina plays Football! Their national team wears Sky blue and white." },
  },
  am: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Armenia.", location:"Armenia está en Asia.", capital:"Su capital es Yerevan.", fact:"¡Fue uno de los primeros países en tener iglesias!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Armenia.", location:"Armenia is in Asia.", capital:"Its capital is Yerevan.", fact:"It was one of the first countries to build churches!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  ag: {
    es: { intro:"¡Nuestro próximo destino es Antigua y Barbuda!", location:"Este país queda en América.", capital:"La ciudad más importante se llama Saint John's.", fact:"¡Dice tener una playa distinta para cada día del año!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Antigua and Barbuda!", location:"This country is located in America.", capital:"The most important city is called Saint John's.", fact:"It says it has a different beach for every day of the year!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  au: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Australia.", location:"Estamos en Oceanía, ¡en el país llamado Australia!", capital:"¿Sabías que la capital es Canberra?", fact:"¡Ahí viven muchísimos canguros!", celebration:"¡Lo descubriste!", animal:"¡Y mira ese animal! Es un Canguro rojo. ¿Podés decirlo conmigo? ¡Canguro rojo!", food:"¡Qué rico! En Australia se come Meat pie australiana.", sport:"¡Australia juega al Fútbol! Su selección usa los colores Dorada y verde." },
    en: { intro:"Look where we've landed! We're in Australia.", location:"We're in Oceania, in the country called Australia!", capital:"Did you know the capital is Canberra?", fact:"That's where lots of kangaroos live!", celebration:"You discovered it!", animal:"And look at that animal! It's a Red kangaroo. Can you say it with me?", food:"Yum! In Australia, people eat Australian meat pie.", sport:"Australia plays Football! Their national team wears Gold and green." },
  },
  at: {
    es: { intro:"¡Vamos a descubrir Austria juntos!", location:"Austria está en Europa.", capital:"Su capital es Vienna.", fact:"¡Ahí nació mucha música clásica famosa!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Austria together!", location:"Austria is in Europe.", capital:"Its capital is Vienna.", fact:"That's where lots of famous classical music was born!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  az: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Azerbaiyán.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Baku.", fact:"¡Tiene llamas de fuego natural que salen de la tierra!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Azerbaijan.", location:"This country is located in Asia.", capital:"The most important city is called Baku.", fact:"It has natural fire flames that come out of the ground!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  bi: {
    es: { intro:"¡Tenemos una nueva aventura en Burundi!", location:"Estamos en África, ¡en el país llamado Burundi!", capital:"¿Sabías que la capital es Gitega?", fact:"¡Tiene un lago gigante, uno de los más profundos del mundo!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Burundi!", location:"We're in Africa, in the country called Burundi!", capital:"Did you know the capital is Gitega?", fact:"It has a giant lake, one of the deepest in the world!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  be: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Bélgica.", location:"Bélgica está en Europa.", capital:"Su capital es Brussels.", fact:"¡Es famosa por su chocolate delicioso!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:"¡Bélgica juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"Get ready to travel! Today we're going to Belgium.", location:"Belgium is in Europe.", capital:"Its capital is Brussels.", fact:"It's famous for its delicious chocolate!", celebration:"Your passport is growing!", animal:null, food:null, sport:"Belgium plays Football! Their national team wears Red." },
  },
  bj: {
    es: { intro:"¡Nuestro próximo destino es Benín!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Porto-Novo.", fact:"¡Tiene un pueblo entero construido sobre el agua!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Benin!", location:"This country is located in Africa.", capital:"The most important city is called Porto-Novo.", fact:"It has a whole village built on stilts over water!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  bf: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Burkina Faso.", location:"Estamos en África, ¡en el país llamado Burkina Faso!", capital:"¿Sabías que la capital es Ouagadougou?", fact:"¡Tiene sabanas donde viven elefantes y leones!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Burkina Faso.", location:"We're in Africa, in the country called Burkina Faso!", capital:"Did you know the capital is Ouagadougou?", fact:"It has savannas where elephants and lions live!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  bd: {
    es: { intro:"¡Vamos a descubrir Bangladesh juntos!", location:"Bangladesh está en Asia.", capital:"Su capital es Dhaka.", fact:"¡Tiene el bosque de manglares más grande del mundo!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Bangladesh together!", location:"Bangladesh is in Asia.", capital:"Its capital is Dhaka.", fact:"It has the world's largest mangrove forest!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  bg: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Bulgaria.", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Sofia.", fact:"¡Tiene campos gigantes de flores de rosas!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Bulgaria.", location:"This country is located in Europe.", capital:"The most important city is called Sofia.", fact:"It has giant fields of rose flowers!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  bh: {
    es: { intro:"¡Tenemos una nueva aventura en Bahrein!", location:"Estamos en Asia, ¡en el país llamado Bahrein!", capital:"¿Sabías que la capital es Manama?", fact:"¡Es una isla conectada a tierra firme por un puente gigante!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Bahrain!", location:"We're in Asia, in the country called Bahrain!", capital:"Did you know the capital is Manama?", fact:"It's an island connected to the mainland by a giant bridge!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  bs: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Bahamas.", location:"Bahamas está en América.", capital:"Su capital es Nassau.", fact:"¡Tiene más de 700 islas con agua cristalina!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Bahamas.", location:"Bahamas is in America.", capital:"Its capital is Nassau.", fact:"It has more than 700 islands with crystal-clear water!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  ba: {
    es: { intro:"¡Nuestro próximo destino es Bosnia y Herzegovina!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Sarajevo.", fact:"¡Tiene un puente antiguo muy famoso sobre un río!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Bosnia and Herzegovina!", location:"This country is located in Europe.", capital:"The most important city is called Sarajevo.", fact:"It has a very famous old bridge over a river!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  by: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Bielorrusia.", location:"Estamos en Europa, ¡en el país llamado Bielorrusia!", capital:"¿Sabías que la capital es Minsk?", fact:"¡Tiene bosques enormes donde vive el bisonte europeo!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Belarus.", location:"We're in Europe, in the country called Belarus!", capital:"Did you know the capital is Minsk?", fact:"It has huge forests where the European bison lives!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  bz: {
    es: { intro:"¡Vamos a descubrir Belice juntos!", location:"Belice está en América.", capital:"Su capital es Belmopan.", fact:"¡Tiene un arrecife de coral gigante para bucear!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Belize together!", location:"Belize is in America.", capital:"Its capital is Belmopan.", fact:"It has a giant coral reef for diving!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  bo: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Bolivia.", location:"Este país queda en América.", capital:"La ciudad más importante se llama Sucre.", fact:"¡Tiene un desierto de sal gigante como un espejo!", celebration:"¡Lo lograste!", animal:null, food:null, sport:"¡Bolivia juega al Fútbol! Su selección usa los colores Verde." },
    en: { intro:"Open your eyes wide! We've arrived in Bolivia.", location:"This country is located in America.", capital:"The most important city is called Sucre.", fact:"It has a giant salt desert that looks like a mirror!", celebration:"You did it!", animal:null, food:null, sport:"Bolivia plays Football! Their national team wears Green." },
  },
  br: {
    es: { intro:"¡Tenemos una nueva aventura en Brasil!", location:"Estamos en América, ¡en el país llamado Brasil!", capital:"¿Sabías que la capital es Brasília?", fact:"¡Tiene la selva más grande del mundo!", celebration:"¡Sos un explorador increíble!", animal:"¡Y mira ese animal! Es un Jaguar. ¿Podés decirlo conmigo? ¡Jaguar!", food:"¡Qué rico! En Brasil se come Feijoada.", sport:"¡Brasil juega al Fútbol! Su selección usa los colores Amarilla y verde." },
    en: { intro:"We have a new adventure in Brazil!", location:"We're in America, in the country called Brazil!", capital:"Did you know the capital is Brasília?", fact:"It has the world's largest rainforest!", celebration:"You're an amazing explorer!", animal:"And look at that animal! It's a Jaguar. Can you say it with me?", food:"Yum! In Brazil, people eat Feijoada (Brazilian black bean stew).", sport:"Brazil plays Football! Their national team wears Yellow and green." },
  },
  bb: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Barbados.", location:"Barbados está en América.", capital:"Su capital es Bridgetown.", fact:"¡Tiene playas de arena rosada y blanca!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Barbados.", location:"Barbados is in America.", capital:"Its capital is Bridgetown.", fact:"It has pink and white sand beaches!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  bn: {
    es: { intro:"¡Nuestro próximo destino es Brunei!", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Bandar Seri Begawan.", fact:"¡Tiene selvas tropicales muy bien cuidadas!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Brunei!", location:"This country is located in Asia.", capital:"The most important city is called Bandar Seri Begawan.", fact:"It has very well-preserved tropical rainforests!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  bt: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Bután.", location:"Estamos en Asia, ¡en el país llamado Bután!", capital:"¿Sabías que la capital es Thimphu?", fact:"¡Mide la felicidad de su gente en vez de solo el dinero!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Bhutan.", location:"We're in Asia, in the country called Bhutan!", capital:"Did you know the capital is Thimphu?", fact:"It measures its people's happiness, not just money!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  bw: {
    es: { intro:"¡Vamos a descubrir Botswana juntos!", location:"Botswana está en África.", capital:"Su capital es Gaborone.", fact:"¡Tiene muchísimos elefantes viviendo en libertad!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Botswana together!", location:"Botswana is in Africa.", capital:"Its capital is Gaborone.", fact:"It has huge numbers of elephants living in the wild!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  cf: {
    es: { intro:"¡Abre bien los ojos! Llegamos a República Centroafricana.", location:"Este país queda en África.", capital:"La ciudad más importante se llama Bangui.", fact:"¡Tiene selvas tropicales llenas de animales!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Central African Republic.", location:"This country is located in Africa.", capital:"The most important city is called Bangui.", fact:"It has tropical rainforests full of animals!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  ca: {
    es: { intro:"¡Tenemos una nueva aventura en Canadá!", location:"Estamos en América, ¡en el país llamado Canadá!", capital:"¿Sabías que la capital es Ottawa?", fact:"¡Tiene bosques gigantes y muchísima nieve!", celebration:"¡Fantástico!", animal:null, food:null, sport:"¡Canadá juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"We have a new adventure in Canada!", location:"We're in America, in the country called Canada!", capital:"Did you know the capital is Ottawa?", fact:"It has giant forests and lots of snow!", celebration:"Fantastic!", animal:null, food:null, sport:"Canada plays Football! Their national team wears Red." },
  },
  ch: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Suiza.", location:"Suiza está en Europa.", capital:"Su capital es Bern.", fact:"¡Tiene montañas nevadas gigantes, los Alpes!", celebration:"¡Lo lograste!", animal:null, food:null, sport:"¡Suiza juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"Get ready to travel! Today we're going to Switzerland.", location:"Switzerland is in Europe.", capital:"Its capital is Bern.", fact:"It has giant snowy mountains called the Alps!", celebration:"You did it!", animal:null, food:null, sport:"Switzerland plays Football! Their national team wears Red." },
  },
  cl: {
    es: { intro:"¡Nuestro próximo destino es Chile!", location:"Este país queda en América.", capital:"La ciudad más importante se llama Santiago.", fact:"¡Ahí están las famosas estatuas gigantes de la Isla de Pascua!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:"¡Chile juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"Our next stop is Chile!", location:"This country is located in America.", capital:"The most important city is called Santiago.", fact:"That's where the famous giant Easter Island statues are!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:"Chile plays Football! Their national team wears Red." },
  },
  cn: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en China.", location:"Estamos en Asia, ¡en el país llamado China!", capital:"¿Sabías que la capital es Beijing?", fact:"¡Tiene una muralla gigante que se ve desde muy lejos!", celebration:"¡Lo descubriste!", animal:"¡Y mira ese animal! Es un Panda gigante. ¿Podés decirlo conmigo? ¡Panda gigante!", food:"¡Qué rico! En China se come Jiaozi (empanaditas chinas).", sport:"¡China juega al Fútbol! Su selección usa los colores Roja y amarilla." },
    en: { intro:"Look where we've landed! We're in China.", location:"We're in Asia, in the country called China!", capital:"Did you know the capital is Beijing?", fact:"It has a giant wall you can see from very far away!", celebration:"You discovered it!", animal:"And look at that animal! It's a Giant panda. Can you say it with me?", food:"Yum! In China, people eat Jiaozi (Chinese dumplings).", sport:"China plays Football! Their national team wears Red and yellow." },
  },
  ci: {
    es: { intro:"¡Vamos a descubrir Costa de Marfil juntos!", location:"Costa de Marfil está en África.", capital:"Su capital es Yamoussoukro.", fact:"¡Es uno de los países que más cacao produce del mundo!", celebration:"¡Excelente!", animal:null, food:null, sport:"¡Costa de Marfil juega al Fútbol! Su selección usa los colores Naranja." },
    en: { intro:"Let's discover Ivory Coast together!", location:"Ivory Coast is in Africa.", capital:"Its capital is Yamoussoukro.", fact:"It's one of the world's biggest producers of cacao!", celebration:"Excellent!", animal:null, food:null, sport:"Ivory Coast plays Football! Their national team wears Orange." },
  },
  cm: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Camerún.", location:"Este país queda en África.", capital:"La ciudad más importante se llama Yaoundé.", fact:"¡Tiene selvas, montañas y playas, todo en un mismo país!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:"¡Camerún juega al Fútbol! Su selección usa los colores Verde." },
    en: { intro:"Open your eyes wide! We've arrived in Cameroon.", location:"This country is located in Africa.", capital:"The most important city is called Yaoundé.", fact:"It has jungles, mountains and beaches, all in one country!", celebration:"What a great explorer!", animal:null, food:null, sport:"Cameroon plays Football! Their national team wears Green." },
  },
  cd: {
    es: { intro:"¡Tenemos una nueva aventura en Congo (Rep. Dem.)!", location:"Estamos en África, ¡en el país llamado Congo (Rep. Dem.)!", capital:"¿Sabías que la capital es Kinshasa?", fact:"¡Tiene la selva tropical más grande de toda África!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in DR Congo!", location:"We're in Africa, in the country called DR Congo!", capital:"Did you know the capital is Kinshasa?", fact:"It has the biggest rainforest in all of Africa!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  cg: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Congo.", location:"Congo está en África.", capital:"Su capital es Brazzaville.", fact:"¡Tiene selvas enormes junto a un río gigante!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Republic of the Congo.", location:"Republic of the Congo is in Africa.", capital:"Its capital is Brazzaville.", fact:"It has huge forests along a giant river!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  co: {
    es: { intro:"¡Nuestro próximo destino es Colombia!", location:"Este país queda en América.", capital:"La ciudad más importante se llama Bogotá.", fact:"¡Tiene selvas con muchísimos colores y animales!", celebration:"¡Fantástico!", animal:null, food:null, sport:"¡Colombia juega al Fútbol! Su selección usa los colores Amarilla." },
    en: { intro:"Our next stop is Colombia!", location:"This country is located in America.", capital:"The most important city is called Bogotá.", fact:"It has jungles full of colorful animals!", celebration:"Fantastic!", animal:null, food:null, sport:"Colombia plays Football! Their national team wears Yellow." },
  },
  km: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Comoras.", location:"Estamos en África, ¡en el país llamado Comoras!", capital:"¿Sabías que la capital es Moroni?", fact:"¡Es un grupo de islas volcánicas en el océano!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Comoros.", location:"We're in Africa, in the country called Comoros!", capital:"Did you know the capital is Moroni?", fact:"It's a group of volcanic islands in the ocean!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  cv: {
    es: { intro:"¡Vamos a descubrir Cabo Verde juntos!", location:"Cabo Verde está en África.", capital:"Su capital es Praia.", fact:"¡Es un grupo de islas en medio del océano Atlántico!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Cape Verde together!", location:"Cape Verde is in Africa.", capital:"Its capital is Praia.", fact:"It's a group of islands in the middle of the Atlantic Ocean!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  cr: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Costa Rica.", location:"Este país queda en América.", capital:"La ciudad más importante se llama San José.", fact:"¡Tiene perezosos que se mueven muy despacito en los árboles!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Costa Rica.", location:"This country is located in America.", capital:"The most important city is called San José.", fact:"It has sloths that move very slowly in the trees!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  cu: {
    es: { intro:"¡Tenemos una nueva aventura en Cuba!", location:"Estamos en América, ¡en el país llamado Cuba!", capital:"¿Sabías que la capital es Havana?", fact:"¡Tiene autos antiguos de colores por todas partes!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Cuba!", location:"We're in America, in the country called Cuba!", capital:"Did you know the capital is Havana?", fact:"It has colorful old cars everywhere!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  cy: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Chipre.", location:"Chipre está en Europa.", capital:"Su capital es Nicosia.", fact:"¡Es una isla con playas hermosas en el Mediterráneo!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Cyprus.", location:"Cyprus is in Europe.", capital:"Its capital is Nicosia.", fact:"It's an island with beautiful Mediterranean beaches!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  cz: {
    es: { intro:"¡Nuestro próximo destino es Chequia!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Prague.", fact:"¡Tiene un castillo gigante en medio de la ciudad!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Czechia!", location:"This country is located in Europe.", capital:"The most important city is called Prague.", fact:"It has a giant castle right in the middle of the city!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  de: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Alemania.", location:"Estamos en Europa, ¡en el país llamado Alemania!", capital:"¿Sabías que la capital es Berlin?", fact:"¡Tiene castillos que parecen de cuento de hadas!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:"¡Alemania juega al Fútbol! Su selección usa los colores Blanca y negra." },
    en: { intro:"Look where we've landed! We're in Germany.", location:"We're in Europe, in the country called Germany!", capital:"Did you know the capital is Berlin?", fact:"It has castles that look like fairy tales!", celebration:"Your passport is growing!", animal:null, food:null, sport:"Germany plays Football! Their national team wears White and black." },
  },
  dj: {
    es: { intro:"¡Vamos a descubrir Djibouti juntos!", location:"Djibouti está en África.", capital:"Su capital es Djibouti.", fact:"¡Tiene un lago tan salado que podés flotar sin esfuerzo!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Djibouti together!", location:"Djibouti is in Africa.", capital:"Its capital is Djibouti.", fact:"It has a lake so salty you can float without trying!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  dm: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Dominica.", location:"Este país queda en América.", capital:"La ciudad más importante se llama Roseau.", fact:"¡Tiene un lago que hierve por el calor de un volcán!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Dominica.", location:"This country is located in America.", capital:"The most important city is called Roseau.", fact:"It has a lake that boils from volcanic heat!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  dk: {
    es: { intro:"¡Tenemos una nueva aventura en Dinamarca!", location:"Estamos en Europa, ¡en el país llamado Dinamarca!", capital:"¿Sabías que la capital es Copenhagen?", fact:"¡A todos les encanta andar en bicicleta!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:"¡Dinamarca juega al Fútbol! Su selección usa los colores Roja y blanca." },
    en: { intro:"We have a new adventure in Denmark!", location:"We're in Europe, in the country called Denmark!", capital:"Did you know the capital is Copenhagen?", fact:"Everyone there loves riding bicycles!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:"Denmark plays Football! Their national team wears Red and white." },
  },
  do: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a República Dominicana.", location:"República Dominicana está en América.", capital:"Su capital es Santo Domingo.", fact:"¡Tiene playas de arena blanca y agua celeste!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Dominican Republic.", location:"Dominican Republic is in America.", capital:"Its capital is Santo Domingo.", fact:"It has white sand beaches and turquoise water!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  dz: {
    es: { intro:"¡Nuestro próximo destino es Argelia!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Algiers.", fact:"¡Tiene una parte gigante del desierto del Sahara!", celebration:"¡Excelente!", animal:null, food:null, sport:"¡Argelia juega al Fútbol! Su selección usa los colores Blanca y verde." },
    en: { intro:"Our next stop is Algeria!", location:"This country is located in Africa.", capital:"The most important city is called Algiers.", fact:"It has a huge part of the Sahara Desert!", celebration:"Excellent!", animal:null, food:null, sport:"Algeria plays Football! Their national team wears White and green." },
  },
  ec: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Ecuador.", location:"Estamos en América, ¡en el país llamado Ecuador!", capital:"¿Sabías que la capital es Quito?", fact:"¡Las islas Galápagos tienen tortugas gigantes!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:"¡Ecuador juega al Fútbol! Su selección usa los colores Amarilla y azul." },
    en: { intro:"Look where we've landed! We're in Ecuador.", location:"We're in America, in the country called Ecuador!", capital:"Did you know the capital is Quito?", fact:"The Galápagos Islands have giant tortoises!", celebration:"What a great explorer!", animal:null, food:null, sport:"Ecuador plays Football! Their national team wears Yellow and blue." },
  },
  eg: {
    es: { intro:"¡Vamos a descubrir Egipto juntos!", location:"Egipto está en África.", capital:"Su capital es Cairo.", fact:"¡Tiene pirámides gigantes muy antiguas!", celebration:"¡Otro país conquistado!", animal:"¡Y mira ese animal! Es un Camello dromedario. ¿Podés decirlo conmigo? ¡Camello dromedario!", food:"¡Qué rico! En Egipto se come Falafel.", sport:"¡Egipto juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"Let's discover Egypt together!", location:"Egypt is in Africa.", capital:"Its capital is Cairo.", fact:"It has giant ancient pyramids!", celebration:"Another country explored!", animal:"And look at that animal! It's a Dromedary camel. Can you say it with me?", food:"Yum! In Egypt, people eat Falafel.", sport:"Egypt plays Football! Their national team wears Red." },
  },
  er: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Eritrea.", location:"Este país queda en África.", capital:"La ciudad más importante se llama Asmara.", fact:"¡Tiene una costa larga junto al Mar Rojo!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Eritrea.", location:"This country is located in Africa.", capital:"The most important city is called Asmara.", fact:"It has a long coast on the Red Sea!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  es: {
    es: { intro:"¡Tenemos una nueva aventura en España!", location:"Estamos en Europa, ¡en el país llamado España!", capital:"¿Sabías que la capital es Madrid?", fact:"¡Tiene castillos muy antiguos!", celebration:"¡Fantástico!", animal:"¡Y mira ese animal! Es un Lince ibérico. ¿Podés decirlo conmigo? ¡Lince ibérico!", food:"¡Qué rico! En España se come Paella.", sport:"¡España juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"We have a new adventure in Spain!", location:"We're in Europe, in the country called Spain!", capital:"Did you know the capital is Madrid?", fact:"It has very old castles!", celebration:"Fantastic!", animal:"And look at that animal! It's a Iberian lynx. Can you say it with me?", food:"Yum! In Spain, people eat Paella.", sport:"Spain plays Football! Their national team wears Red." },
  },
  ee: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Estonia.", location:"Estonia está en Europa.", capital:"Su capital es Tallinn.", fact:"¡Casi todo el país está cubierto de bosques!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Estonia.", location:"Estonia is in Europe.", capital:"Its capital is Tallinn.", fact:"Almost the whole country is covered in forests!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  et: {
    es: { intro:"¡Nuestro próximo destino es Etiopía!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Addis Ababa.", fact:"¡Ahí se descubrió el café por primera vez!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Ethiopia!", location:"This country is located in Africa.", capital:"The most important city is called Addis Ababa.", fact:"That's where coffee was first discovered!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  fi: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Finlandia.", location:"Estamos en Europa, ¡en el país llamado Finlandia!", capital:"¿Sabías que la capital es Helsinki?", fact:"¡Tiene miles de lagos!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Finland.", location:"We're in Europe, in the country called Finland!", capital:"Did you know the capital is Helsinki?", fact:"It has thousands of lakes!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  fj: {
    es: { intro:"¡Vamos a descubrir Fiyi juntos!", location:"Fiyi está en Oceanía.", capital:"Su capital es Suva.", fact:"¡Tiene más de 300 islas rodeadas de coral!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Fiji together!", location:"Fiji is in Oceania.", capital:"Its capital is Suva.", fact:"It has more than 300 islands surrounded by coral!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  fr: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Francia.", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Paris.", fact:"¡Ahí está la Torre Eiffel!", celebration:"¡Qué gran explorador!", animal:"¡Y mira ese animal! Es un Gallo galo. ¿Podés decirlo conmigo? ¡Gallo galo!", food:"¡Qué rico! En Francia se come Croissant.", sport:"¡Francia juega al Fútbol! Su selección usa los colores Azul." },
    en: { intro:"Open your eyes wide! We've arrived in France.", location:"This country is located in Europe.", capital:"The most important city is called Paris.", fact:"That's where the Eiffel Tower is!", celebration:"What a great explorer!", animal:"And look at that animal! It's a Gallic rooster. Can you say it with me?", food:"Yum! In France, people eat Croissant.", sport:"France plays Football! Their national team wears Blue." },
  },
  fm: {
    es: { intro:"¡Tenemos una nueva aventura en Micronesia!", location:"Estamos en Oceanía, ¡en el país llamado Micronesia!", capital:"¿Sabías que la capital es Palikir?", fact:"¡Tiene ruinas antiguas construidas sobre el agua!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Micronesia!", location:"We're in Oceania, in the country called Micronesia!", capital:"Did you know the capital is Palikir?", fact:"It has ancient ruins built over the water!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  ga: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Gabón.", location:"Gabón está en África.", capital:"Su capital es Libreville.", fact:"¡Tiene selvas donde viven gorilas y elefantes!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Gabon.", location:"Gabon is in Africa.", capital:"Its capital is Libreville.", fact:"It has jungles where gorillas and elephants live!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  gb: {
    es: { intro:"¡Nuestro próximo destino es Reino Unido!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama London.", fact:"¡Ahí está el famoso reloj Big Ben!", celebration:"¡Fantástico!", animal:null, food:null, sport:"¡Reino Unido juega al Fútbol! Su selección usa los colores Blanca." },
    en: { intro:"Our next stop is United Kingdom!", location:"This country is located in Europe.", capital:"The most important city is called London.", fact:"That's where the famous Big Ben clock is!", celebration:"Fantastic!", animal:null, food:null, sport:"United Kingdom plays Football! Their national team wears White." },
  },
  ge: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Georgia.", location:"Estamos en Asia, ¡en el país llamado Georgia!", capital:"¿Sabías que la capital es Tbilisi?", fact:"¡Tiene montañas altísimas y viñedos muy antiguos!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Georgia.", location:"We're in Asia, in the country called Georgia!", capital:"Did you know the capital is Tbilisi?", fact:"It has very tall mountains and ancient vineyards!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  gh: {
    es: { intro:"¡Vamos a descubrir Ghana juntos!", location:"Ghana está en África.", capital:"Su capital es Accra.", fact:"¡Tiene selvas tropicales llenas de cacao, para hacer chocolate!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:"¡Ghana juega al Fútbol! Su selección usa los colores Blanca con una estrella negra." },
    en: { intro:"Let's discover Ghana together!", location:"Ghana is in Africa.", capital:"Its capital is Accra.", fact:"It has rainforests full of cacao, used to make chocolate!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:"Ghana plays Football! Their national team wears White with a black star." },
  },
  gn: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Guinea.", location:"Este país queda en África.", capital:"La ciudad más importante se llama Conakry.", fact:"¡Tiene montañas donde nacen varios ríos importantes!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Guinea.", location:"This country is located in Africa.", capital:"The most important city is called Conakry.", fact:"It has mountains where several important rivers begin!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  gm: {
    es: { intro:"¡Tenemos una nueva aventura en Gambia!", location:"Estamos en África, ¡en el país llamado Gambia!", capital:"¿Sabías que la capital es Banjul?", fact:"¡Es el país más pequeño de toda África continental!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Gambia!", location:"We're in Africa, in the country called Gambia!", capital:"Did you know the capital is Banjul?", fact:"It's the smallest country in mainland Africa!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  gw: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Guinea-Bisáu.", location:"Guinea-Bisáu está en África.", capital:"Su capital es Bissau.", fact:"¡Tiene un archipiélago con muchas islas verdes!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Guinea-Bissau.", location:"Guinea-Bissau is in Africa.", capital:"Its capital is Bissau.", fact:"It has an archipelago with many green islands!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  gq: {
    es: { intro:"¡Nuestro próximo destino es Guinea Ecuatorial!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Malabo.", fact:"¡Tiene selvas tropicales muy verdes!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Equatorial Guinea!", location:"This country is located in Africa.", capital:"The most important city is called Malabo.", fact:"It has very green tropical rainforests!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  gr: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Grecia.", location:"Estamos en Europa, ¡en el país llamado Grecia!", capital:"¿Sabías que la capital es Athens?", fact:"¡Ahí nacieron los Juegos Olímpicos!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Greece.", location:"We're in Europe, in the country called Greece!", capital:"Did you know the capital is Athens?", fact:"That's where the Olympic Games were born!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  gd: {
    es: { intro:"¡Vamos a descubrir Grenada juntos!", location:"Grenada está en América.", capital:"Su capital es St. George's.", fact:"¡La llaman la Isla de las Especias por su nuez moscada!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Grenada together!", location:"Grenada is in America.", capital:"Its capital is St. George's.", fact:"It's called the Spice Island because of its nutmeg!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  gt: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Guatemala.", location:"Este país queda en América.", capital:"La ciudad más importante se llama Guatemala City.", fact:"¡Tiene pirámides muy antiguas escondidas en la selva!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Guatemala.", location:"This country is located in America.", capital:"The most important city is called Guatemala City.", fact:"It has very old pyramids hidden in the jungle!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  gy: {
    es: { intro:"¡Tenemos una nueva aventura en Guyana!", location:"Estamos en América, ¡en el país llamado Guyana!", capital:"¿Sabías que la capital es Georgetown?", fact:"¡Tiene una catarata más alta que las Cataratas del Niágara!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Guyana!", location:"We're in America, in the country called Guyana!", capital:"Did you know the capital is Georgetown?", fact:"It has a waterfall taller than Niagara Falls!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  hn: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Honduras.", location:"Honduras está en América.", capital:"Su capital es Tegucigalpa.", fact:"¡Tiene ruinas antiguas escondidas entre montañas!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Honduras.", location:"Honduras is in America.", capital:"Its capital is Tegucigalpa.", fact:"It has ancient ruins hidden among the mountains!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  hr: {
    es: { intro:"¡Nuestro próximo destino es Croacia!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Zagreb.", fact:"¡Tiene playas con agua turquesa muy transparente!", celebration:"¡Excelente!", animal:null, food:null, sport:"¡Croacia juega al Fútbol! Su selección usa los colores A cuadros rojos y blancos." },
    en: { intro:"Our next stop is Croatia!", location:"This country is located in Europe.", capital:"The most important city is called Zagreb.", fact:"It has beaches with very clear turquoise water!", celebration:"Excellent!", animal:null, food:null, sport:"Croatia plays Football! Their national team wears Red and white checkered." },
  },
  ht: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Haití.", location:"Estamos en América, ¡en el país llamado Haití!", capital:"¿Sabías que la capital es Port-au-Prince?", fact:"¡Comparte una isla con República Dominicana!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Haiti.", location:"We're in America, in the country called Haiti!", capital:"Did you know the capital is Port-au-Prince?", fact:"It shares an island with the Dominican Republic!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  hu: {
    es: { intro:"¡Vamos a descubrir Hungría juntos!", location:"Hungría está en Europa.", capital:"Su capital es Budapest.", fact:"¡Tiene aguas termales para bañarse!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Hungary together!", location:"Hungary is in Europe.", capital:"Its capital is Budapest.", fact:"It has hot springs you can bathe in!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  id: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Indonesia.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Jakarta.", fact:"¡Ahí viven los dragones de Komodo, unos lagartos gigantes!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Indonesia.", location:"This country is located in Asia.", capital:"The most important city is called Jakarta.", fact:"That's where Komodo dragons live, giant lizards!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  in: {
    es: { intro:"¡Tenemos una nueva aventura en India!", location:"Estamos en Asia, ¡en el país llamado India!", capital:"¿Sabías que la capital es New Delhi?", fact:"¡Ahí está el hermoso Taj Mahal!", celebration:"¡Fantástico!", animal:"¡Y mira ese animal! Es un Tigre de Bengala. ¿Podés decirlo conmigo? ¡Tigre de Bengala!", food:"¡Qué rico! En India se come Curry.", sport:"¡India juega al Críquet! Su selección usa los colores Azul." },
    en: { intro:"We have a new adventure in India!", location:"We're in Asia, in the country called India!", capital:"Did you know the capital is New Delhi?", fact:"That's where the beautiful Taj Mahal is!", celebration:"Fantastic!", animal:"And look at that animal! It's a Bengal tiger. Can you say it with me?", food:"Yum! In India, people eat Curry.", sport:"India plays Cricket! Their national team wears Blue." },
  },
  ie: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Irlanda.", location:"Irlanda está en Europa.", capital:"Su capital es Dublin.", fact:"¡Es conocida como la Isla Esmeralda por su color verde!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Ireland.", location:"Ireland is in Europe.", capital:"Its capital is Dublin.", fact:"It's known as the Emerald Isle because it's so green!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  ir: {
    es: { intro:"¡Nuestro próximo destino es Iran!", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Tehran.", fact:"¡Es famoso por sus alfombras hechas a mano con muchos colores!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:"¡Iran juega al Fútbol! Su selección usa los colores Blanca." },
    en: { intro:"Our next stop is Iran!", location:"This country is located in Asia.", capital:"The most important city is called Tehran.", fact:"It's famous for its colorful handmade carpets!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:"Iran plays Football! Their national team wears White." },
  },
  iq: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Irak.", location:"Estamos en Asia, ¡en el país llamado Irak!", capital:"¿Sabías que la capital es Baghdad?", fact:"¡Ahí se inventó una de las primeras escrituras del mundo!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Iraq.", location:"We're in Asia, in the country called Iraq!", capital:"Did you know the capital is Baghdad?", fact:"That's where one of the world's first writing systems was invented!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  is: {
    es: { intro:"¡Vamos a descubrir Islandia juntos!", location:"Islandia está en Europa.", capital:"Su capital es Reykjavik.", fact:"¡Tiene volcanes y géiseres que lanzan agua caliente!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Iceland together!", location:"Iceland is in Europe.", capital:"Its capital is Reykjavik.", fact:"It has volcanoes and geysers that shoot hot water!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  il: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Israel.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Jerusalem.", fact:"¡Tiene un mar tan salado que flotás sin esfuerzo!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Israel.", location:"This country is located in Asia.", capital:"The most important city is called Jerusalem.", fact:"It has a sea so salty you float without trying!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  it: {
    es: { intro:"¡Tenemos una nueva aventura en Italia!", location:"Estamos en Europa, ¡en el país llamado Italia!", capital:"¿Sabías que la capital es Rome?", fact:"¡Ahí se inventó la pizza!", celebration:"¡Otro país conquistado!", animal:"¡Y mira ese animal! Es un Lobo italiano. ¿Podés decirlo conmigo? ¡Lobo italiano!", food:"¡Qué rico! En Italia se come Pizza.", sport:"¡Italia juega al Fútbol! Su selección usa los colores Azul (Azzurri)." },
    en: { intro:"We have a new adventure in Italy!", location:"We're in Europe, in the country called Italy!", capital:"Did you know the capital is Rome?", fact:"That's where pizza was invented!", celebration:"Another country explored!", animal:"And look at that animal! It's a Italian wolf. Can you say it with me?", food:"Yum! In Italy, people eat Pizza.", sport:"Italy plays Football! Their national team wears Blue (Azzurri)." },
  },
  jm: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Jamaica.", location:"Jamaica está en América.", capital:"Su capital es Kingston.", fact:"¡Tiene corredores muy veloces, famosos en el mundo entero!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Jamaica.", location:"Jamaica is in America.", capital:"Its capital is Kingston.", fact:"It has super fast runners, famous around the world!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  jo: {
    es: { intro:"¡Nuestro próximo destino es Jordania!", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Amman.", fact:"¡Tiene una ciudad antigua tallada en piedra rosada!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Jordan!", location:"This country is located in Asia.", capital:"The most important city is called Amman.", fact:"It has an ancient city carved into pink stone!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  jp: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Japón.", location:"Estamos en Asia, ¡en el país llamado Japón!", capital:"¿Sabías que la capital es Tokyo?", fact:"¡Tiene trenes súper rápidos!", celebration:"¡Lo lograste!", animal:"¡Y mira ese animal! Es un Macaco japonés (mono de las nieves). ¿Podés decirlo conmigo? ¡Macaco japonés (mono de las nieves)!", food:"¡Qué rico! En Japón se come Sushi.", sport:"¡Japón juega al Fútbol! Su selección usa los colores Azul." },
    en: { intro:"Look where we've landed! We're in Japan.", location:"We're in Asia, in the country called Japan!", capital:"Did you know the capital is Tokyo?", fact:"It has super fast trains!", celebration:"You did it!", animal:"And look at that animal! It's a Japanese macaque (snow monkey). Can you say it with me?", food:"Yum! In Japan, people eat Sushi.", sport:"Japan plays Football! Their national team wears Blue." },
  },
  kz: {
    es: { intro:"¡Vamos a descubrir Kazajistán juntos!", location:"Kazajistán está en Asia.", capital:"Su capital es Astana.", fact:"¡Es el país sin salida al mar más grande del mundo!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Kazakhstan together!", location:"Kazakhstan is in Asia.", capital:"Its capital is Astana.", fact:"It's the largest landlocked country in the world!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  ke: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Kenia.", location:"Este país queda en África.", capital:"La ciudad más importante se llama Nairobi.", fact:"¡Ahí podés ver leones y jirafas en la sabana!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Kenya.", location:"This country is located in Africa.", capital:"The most important city is called Nairobi.", fact:"You can see lions and giraffes on the savanna there!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  kg: {
    es: { intro:"¡Tenemos una nueva aventura en Kirguizistán!", location:"Estamos en Asia, ¡en el país llamado Kirguizistán!", capital:"¿Sabías que la capital es Bishkek?", fact:"¡Casi todo el país está cubierto de montañas!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Kyrgyzstan!", location:"We're in Asia, in the country called Kyrgyzstan!", capital:"Did you know the capital is Bishkek?", fact:"Almost the whole country is covered in mountains!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  kh: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Camboya.", location:"Camboya está en Asia.", capital:"Su capital es Phnom Penh.", fact:"¡Tiene un templo gigante llamado Angkor Wat!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Cambodia.", location:"Cambodia is in Asia.", capital:"Its capital is Phnom Penh.", fact:"It has a giant temple called Angkor Wat!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  ki: {
    es: { intro:"¡Nuestro próximo destino es Kiribati!", location:"Este país queda en Oceanía.", capital:"La ciudad más importante se llama South Tarawa.", fact:"¡Está formado por islas repartidas en un océano gigante!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Kiribati!", location:"This country is located in Oceania.", capital:"The most important city is called South Tarawa.", fact:"It's made up of islands spread across a giant ocean!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  kn: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en San Cristóbal y Nieves.", location:"Estamos en América, ¡en el país llamado San Cristóbal y Nieves!", capital:"¿Sabías que la capital es Basseterre?", fact:"¡Es uno de los países más pequeños de toda América!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Saint Kitts and Nevis.", location:"We're in America, in the country called Saint Kitts and Nevis!", capital:"Did you know the capital is Basseterre?", fact:"It's one of the smallest countries in the Americas!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  kr: {
    es: { intro:"¡Vamos a descubrir Corea del Sur juntos!", location:"Corea del Sur está en Asia.", capital:"Su capital es Seoul.", fact:"¡Ahí nació el taekwondo!", celebration:"¡Fantástico!", animal:null, food:null, sport:"¡Corea del Sur juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"Let's discover South Korea together!", location:"South Korea is in Asia.", capital:"Its capital is Seoul.", fact:"That's where taekwondo was born!", celebration:"Fantastic!", animal:null, food:null, sport:"South Korea plays Football! Their national team wears Red." },
  },
  kw: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Kuwait.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Kuwait City.", fact:"¡Tiene torres muy altas junto al mar!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Kuwait.", location:"This country is located in Asia.", capital:"The most important city is called Kuwait City.", fact:"It has tall towers right by the sea!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  la: {
    es: { intro:"¡Tenemos una nueva aventura en Laos!", location:"Estamos en Asia, ¡en el país llamado Laos!", capital:"¿Sabías que la capital es Vientiane?", fact:"¡Tiene muchísimos templos budistas dorados!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Laos!", location:"We're in Asia, in the country called Laos!", capital:"Did you know the capital is Vientiane?", fact:"It has lots of golden Buddhist temples!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  lb: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Líbano.", location:"Líbano está en Asia.", capital:"Su capital es Beirut.", fact:"¡Tiene montañas nevadas muy cerca del mar!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Lebanon.", location:"Lebanon is in Asia.", capital:"Its capital is Beirut.", fact:"It has snowy mountains very close to the sea!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  lr: {
    es: { intro:"¡Nuestro próximo destino es Liberia!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Monrovia.", fact:"¡Tiene playas y selvas tropicales!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Liberia!", location:"This country is located in Africa.", capital:"The most important city is called Monrovia.", fact:"It has beaches and tropical rainforests!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  ly: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Libia.", location:"Estamos en África, ¡en el país llamado Libia!", capital:"¿Sabías que la capital es Tripoli?", fact:"¡Tiene ruinas antiguas junto al mar Mediterráneo!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Libya.", location:"We're in Africa, in the country called Libya!", capital:"Did you know the capital is Tripoli?", fact:"It has ancient ruins by the Mediterranean Sea!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  lc: {
    es: { intro:"¡Vamos a descubrir Santa Lucía juntos!", location:"Santa Lucía está en América.", capital:"Su capital es Castries.", fact:"¡Tiene dos montañas gemelas que salen del mar!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Saint Lucia together!", location:"Saint Lucia is in America.", capital:"Its capital is Castries.", fact:"It has two twin mountain peaks rising from the sea!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  li: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Liechtenstein.", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Vaduz.", fact:"¡Es tan pequeño que se puede recorrer en un día!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Liechtenstein.", location:"This country is located in Europe.", capital:"The most important city is called Vaduz.", fact:"It's so small you could travel across it in a day!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  lk: {
    es: { intro:"¡Tenemos una nueva aventura en Sri Lanka!", location:"Estamos en Asia, ¡en el país llamado Sri Lanka!", capital:"¿Sabías que la capital es Colombo?", fact:"¡Tiene plantaciones de té en montañas verdes!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Sri Lanka!", location:"We're in Asia, in the country called Sri Lanka!", capital:"Did you know the capital is Colombo?", fact:"It has tea plantations on green mountains!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  ls: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Lesotho.", location:"Lesotho está en África.", capital:"Su capital es Maseru.", fact:"¡Está tan alto en las montañas que lo llaman el Reino en el Cielo!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Lesotho.", location:"Lesotho is in Africa.", capital:"Its capital is Maseru.", fact:"It's so high in the mountains it's called the Kingdom in the Sky!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  lt: {
    es: { intro:"¡Nuestro próximo destino es Lituania!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Vilnius.", fact:"¡Le encanta mucho el básquetbol!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Lithuania!", location:"This country is located in Europe.", capital:"The most important city is called Vilnius.", fact:"It loves basketball a lot!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  lu: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Luxemburgo.", location:"Estamos en Europa, ¡en el país llamado Luxemburgo!", capital:"¿Sabías que la capital es Luxembourg?", fact:"¡Tiene un castillo antiguo en medio de la capital!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Luxembourg.", location:"We're in Europe, in the country called Luxembourg!", capital:"Did you know the capital is Luxembourg?", fact:"It has an old castle right in the middle of the capital!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  lv: {
    es: { intro:"¡Vamos a descubrir Letonia juntos!", location:"Letonia está en Europa.", capital:"Su capital es Riga.", fact:"¡Tiene bosques enormes con muchos animales!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Latvia together!", location:"Latvia is in Europe.", capital:"Its capital is Riga.", fact:"It has huge forests full of animals!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  ma: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Marruecos.", location:"Este país queda en África.", capital:"La ciudad más importante se llama Rabat.", fact:"¡Tiene mercados coloridos llamados zocos!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:"¡Marruecos juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"Open your eyes wide! We've arrived in Morocco.", location:"This country is located in Africa.", capital:"The most important city is called Rabat.", fact:"It has colorful markets called souks!", celebration:"What a great explorer!", animal:null, food:null, sport:"Morocco plays Football! Their national team wears Red." },
  },
  mc: {
    es: { intro:"¡Tenemos una nueva aventura en Mónaco!", location:"Estamos en Europa, ¡en el país llamado Mónaco!", capital:"¿Sabías que la capital es Monaco?", fact:"¡Es un país tan chiquito que cabe en pocas cuadras!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Monaco!", location:"We're in Europe, in the country called Monaco!", capital:"Did you know the capital is Monaco?", fact:"It's such a small country it fits in just a few blocks!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  md: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Moldavia.", location:"Moldavia está en Europa.", capital:"Su capital es Chișinău.", fact:"¡Tiene una de las bodegas de vino más grandes del mundo!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Moldova.", location:"Moldova is in Europe.", capital:"Its capital is Chișinău.", fact:"It has one of the largest wine cellars in the world!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  mg: {
    es: { intro:"¡Nuestro próximo destino es Madagascar!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Antananarivo.", fact:"¡Ahí viven los lémures, unos animalitos que no existen en ningún otro lugar!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Madagascar!", location:"This country is located in Africa.", capital:"The most important city is called Antananarivo.", fact:"Lemurs live there, animals found nowhere else on Earth!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  mv: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Maldivas.", location:"Estamos en Asia, ¡en el país llamado Maldivas!", capital:"¿Sabías que la capital es Malé?", fact:"¡Son más de mil islas pequeñitas en el océano Índico!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Maldives.", location:"We're in Asia, in the country called Maldives!", capital:"Did you know the capital is Malé?", fact:"It's more than a thousand tiny islands in the Indian Ocean!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  mx: {
    es: { intro:"¡Vamos a descubrir México juntos!", location:"México está en América.", capital:"Su capital es Mexico City.", fact:"¡Tiene pirámides antiguas gigantes!", celebration:"¡Sos un explorador increíble!", animal:"¡Y mira ese animal! Es un Ajolote. ¿Podés decirlo conmigo? ¡Ajolote!", food:"¡Qué rico! En México se come Taco.", sport:"¡México juega al Fútbol! Su selección usa los colores Verde." },
    en: { intro:"Let's discover Mexico together!", location:"Mexico is in America.", capital:"Its capital is Mexico City.", fact:"It has giant ancient pyramids!", celebration:"You're an amazing explorer!", animal:"And look at that animal! It's a Axolotl. Can you say it with me?", food:"Yum! In Mexico, people eat Taco.", sport:"Mexico plays Football! Their national team wears Green." },
  },
  mh: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Islas Marshall.", location:"Este país queda en Oceanía.", capital:"La ciudad más importante se llama Majuro.", fact:"¡Son islas de coral que forman anillos en el mar!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Marshall Islands.", location:"This country is located in Oceania.", capital:"The most important city is called Majuro.", fact:"They're coral islands that form rings in the sea!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  mk: {
    es: { intro:"¡Tenemos una nueva aventura en Macedonia del Norte!", location:"Estamos en Europa, ¡en el país llamado Macedonia del Norte!", capital:"¿Sabías que la capital es Skopje?", fact:"¡Tiene un lago tan antiguo que tiene miles de años!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in North Macedonia!", location:"We're in Europe, in the country called North Macedonia!", capital:"Did you know the capital is Skopje?", fact:"It has a lake so old it's thousands of years old!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  ml: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Mali.", location:"Mali está en África.", capital:"Su capital es Bamako.", fact:"¡Tiene una mezquita gigante hecha completamente de barro!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Mali.", location:"Mali is in Africa.", capital:"Its capital is Bamako.", fact:"It has a giant mosque made entirely of mud!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  mt: {
    es: { intro:"¡Nuestro próximo destino es Malta!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Valletta.", fact:"¡Es una isla pequeñita con construcciones muy antiguas!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Malta!", location:"This country is located in Europe.", capital:"The most important city is called Valletta.", fact:"It's a tiny island with very ancient buildings!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  mm: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Myanmar.", location:"Estamos en Asia, ¡en el país llamado Myanmar!", capital:"¿Sabías que la capital es Naypyidaw?", fact:"¡Tiene miles de templos antiguos en una misma llanura!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Myanmar.", location:"We're in Asia, in the country called Myanmar!", capital:"Did you know the capital is Naypyidaw?", fact:"It has thousands of ancient temples on a single plain!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  me: {
    es: { intro:"¡Vamos a descubrir Montenegro juntos!", location:"Montenegro está en Europa.", capital:"Su capital es Podgorica.", fact:"¡Tiene montañas que llegan casi hasta el mar!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Montenegro together!", location:"Montenegro is in Europe.", capital:"Its capital is Podgorica.", fact:"It has mountains that reach almost down to the sea!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  mn: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Mongolia.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Ulan Bator.", fact:"¡Muchas familias viven en carpas redondas llamadas gers!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Mongolia.", location:"This country is located in Asia.", capital:"The most important city is called Ulan Bator.", fact:"Many families live in round tents called gers!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  mz: {
    es: { intro:"¡Tenemos una nueva aventura en Mozambique!", location:"Estamos en África, ¡en el país llamado Mozambique!", capital:"¿Sabías que la capital es Maputo?", fact:"¡Tiene playas larguísimas junto al océano Índico!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Mozambique!", location:"We're in Africa, in the country called Mozambique!", capital:"Did you know the capital is Maputo?", fact:"It has very long beaches on the Indian Ocean!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  mr: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Mauritania.", location:"Mauritania está en África.", capital:"Su capital es Nouakchott.", fact:"¡Casi todo su territorio es desierto del Sahara!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Mauritania.", location:"Mauritania is in Africa.", capital:"Its capital is Nouakchott.", fact:"Almost its whole territory is Sahara desert!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  mu: {
    es: { intro:"¡Nuestro próximo destino es Mauricio!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Port Louis.", fact:"¡Es una isla con playas de arena blanca!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Mauritius!", location:"This country is located in Africa.", capital:"The most important city is called Port Louis.", fact:"It's an island with white sand beaches!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  mw: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Malawi.", location:"Estamos en África, ¡en el país llamado Malawi!", capital:"¿Sabías que la capital es Lilongwe?", fact:"¡Tiene un lago tan grande que parece un mar!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Malawi.", location:"We're in Africa, in the country called Malawi!", capital:"Did you know the capital is Lilongwe?", fact:"It has a lake so big it looks like a sea!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  my: {
    es: { intro:"¡Vamos a descubrir Malasia juntos!", location:"Malasia está en Asia.", capital:"Su capital es Kuala Lumpur.", fact:"¡Tiene torres gemelas gigantes muy altas!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Malaysia together!", location:"Malaysia is in Asia.", capital:"Its capital is Kuala Lumpur.", fact:"It has giant twin towers!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  na: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Namibia.", location:"Este país queda en África.", capital:"La ciudad más importante se llama Windhoek.", fact:"¡Tiene un desierto con las dunas de arena más altas del mundo!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Namibia.", location:"This country is located in Africa.", capital:"The most important city is called Windhoek.", fact:"It has a desert with some of the tallest sand dunes in the world!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  ne: {
    es: { intro:"¡Tenemos una nueva aventura en Níger!", location:"Estamos en África, ¡en el país llamado Níger!", capital:"¿Sabías que la capital es Niamey?", fact:"¡Tiene un desierto gigante con dunas altísimas!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Niger!", location:"We're in Africa, in the country called Niger!", capital:"Did you know the capital is Niamey?", fact:"It has a giant desert with very tall dunes!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  ng: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Nigeria.", location:"Nigeria está en África.", capital:"Su capital es Abuja.", fact:"¡Tiene selvas tropicales llenas de animales!", celebration:"¡Lo lograste!", animal:null, food:null, sport:"¡Nigeria juega al Fútbol! Su selección usa los colores Verde con estampado de rayos." },
    en: { intro:"Get ready to travel! Today we're going to Nigeria.", location:"Nigeria is in Africa.", capital:"Its capital is Abuja.", fact:"It has tropical rainforests full of animals!", celebration:"You did it!", animal:null, food:null, sport:"Nigeria plays Football! Their national team wears Green with a lightning pattern." },
  },
  ni: {
    es: { intro:"¡Nuestro próximo destino es Nicaragua!", location:"Este país queda en América.", capital:"La ciudad más importante se llama Managua.", fact:"¡Tiene un lago gigante con tiburones de agua dulce!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Nicaragua!", location:"This country is located in America.", capital:"The most important city is called Managua.", fact:"It has a giant lake with freshwater sharks!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  nl: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Países Bajos.", location:"Estamos en Europa, ¡en el país llamado Países Bajos!", capital:"¿Sabías que la capital es Amsterdam?", fact:"¡Tiene campos gigantes de tulipanes de colores!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:"¡Países Bajos juega al Fútbol! Su selección usa los colores Naranja." },
    en: { intro:"Look where we've landed! We're in Netherlands.", location:"We're in Europe, in the country called Netherlands!", capital:"Did you know the capital is Amsterdam?", fact:"It has giant fields of colorful tulips!", celebration:"You discovered it!", animal:null, food:null, sport:"Netherlands plays Football! Their national team wears Orange." },
  },
  no: {
    es: { intro:"¡Vamos a descubrir Noruega juntos!", location:"Noruega está en Europa.", capital:"Su capital es Oslo.", fact:"¡Tiene fiordos gigantes entre montañas!", celebration:"¡Excelente!", animal:null, food:null, sport:"¡Noruega juega al Fútbol! Su selección usa los colores Roja, blanca y azul." },
    en: { intro:"Let's discover Norway together!", location:"Norway is in Europe.", capital:"Its capital is Oslo.", fact:"It has giant fjords between mountains!", celebration:"Excellent!", animal:null, food:null, sport:"Norway plays Football! Their national team wears Red, white and blue." },
  },
  np: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Nepal.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Kathmandu.", fact:"¡Ahí está el Monte Everest, la montaña más alta del mundo!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Nepal.", location:"This country is located in Asia.", capital:"The most important city is called Kathmandu.", fact:"That's where Mount Everest, the tallest mountain in the world, is!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  nr: {
    es: { intro:"¡Tenemos una nueva aventura en Nauru!", location:"Estamos en Oceanía, ¡en el país llamado Nauru!", capital:"¿Sabías que la capital es Yaren?", fact:"¡Es una de las islas más pequeñas del mundo!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Nauru!", location:"We're in Oceania, in the country called Nauru!", capital:"Did you know the capital is Yaren?", fact:"It's one of the smallest islands in the world!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  nz: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Nueva Zelanda.", location:"Nueva Zelanda está en Oceanía.", capital:"Su capital es Wellington.", fact:"¡El kiwi es un pajarito que no puede volar!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to New Zealand.", location:"New Zealand is in Oceania.", capital:"Its capital is Wellington.", fact:"The kiwi is a little bird that can't fly!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  om: {
    es: { intro:"¡Nuestro próximo destino es Omán!", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Muscat.", fact:"¡Tiene montañas, desiertos y playas de arena blanca!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Oman!", location:"This country is located in Asia.", capital:"The most important city is called Muscat.", fact:"It has mountains, deserts and white sand beaches!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  pk: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Pakistán.", location:"Estamos en Asia, ¡en el país llamado Pakistán!", capital:"¿Sabías que la capital es Islamabad?", fact:"¡Tiene algunas de las montañas más altas del mundo!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Pakistan.", location:"We're in Asia, in the country called Pakistan!", capital:"Did you know the capital is Islamabad?", fact:"It has some of the tallest mountains in the world!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  pa: {
    es: { intro:"¡Vamos a descubrir Panamá juntos!", location:"Panamá está en América.", capital:"Su capital es Panama City.", fact:"¡Tiene un canal gigante por donde pasan barcos enormes!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Panama together!", location:"Panama is in America.", capital:"Its capital is Panama City.", fact:"It has a giant canal that huge ships pass through!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  pe: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Perú.", location:"Este país queda en América.", capital:"La ciudad más importante se llama Lima.", fact:"¡Ahí está la antigua ciudad de Machu Picchu, en las montañas!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:"¡Perú juega al Fútbol! Su selección usa los colores Blanca con franja roja." },
    en: { intro:"Open your eyes wide! We've arrived in Peru.", location:"This country is located in America.", capital:"The most important city is called Lima.", fact:"That's where the ancient city of Machu Picchu is, high in the mountains!", celebration:"You discovered it!", animal:null, food:null, sport:"Peru plays Football! Their national team wears White with a red sash." },
  },
  ph: {
    es: { intro:"¡Tenemos una nueva aventura en Filipinas!", location:"Estamos en Asia, ¡en el país llamado Filipinas!", capital:"¿Sabías que la capital es Manila?", fact:"¡Tiene más de 7000 islas!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Philippines!", location:"We're in Asia, in the country called Philippines!", capital:"Did you know the capital is Manila?", fact:"It has more than 7,000 islands!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  pw: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Palau.", location:"Palau está en Oceanía.", capital:"Su capital es Ngerulmud.", fact:"¡Tiene un lago lleno de medusas que no pican!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Palau.", location:"Palau is in Oceania.", capital:"Its capital is Ngerulmud.", fact:"It has a lake full of jellyfish that don't sting!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  pg: {
    es: { intro:"¡Nuestro próximo destino es Papúa Nueva Guinea!", location:"Este país queda en Oceanía.", capital:"La ciudad más importante se llama Port Moresby.", fact:"¡Tiene selvas con pájaros de colores increíbles!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Papua New Guinea!", location:"This country is located in Oceania.", capital:"The most important city is called Port Moresby.", fact:"It has jungles with incredibly colorful birds!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  pl: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Polonia.", location:"Estamos en Europa, ¡en el país llamado Polonia!", capital:"¿Sabías que la capital es Warsaw?", fact:"¡Tiene bosques con bisontes gigantes!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:"¡Polonia juega al Fútbol! Su selección usa los colores Blanca y roja." },
    en: { intro:"Look where we've landed! We're in Poland.", location:"We're in Europe, in the country called Poland!", capital:"Did you know the capital is Warsaw?", fact:"It has forests with giant bison!", celebration:"Your passport is growing!", animal:null, food:null, sport:"Poland plays Football! Their national team wears White and red." },
  },
  kp: {
    es: { intro:"¡Vamos a descubrir Corea del Norte juntos!", location:"Corea del Norte está en Asia.", capital:"Su capital es Pyongyang.", fact:"¡Tiene una montaña sagrada cubierta de nieve!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover North Korea together!", location:"North Korea is in Asia.", capital:"Its capital is Pyongyang.", fact:"It has a sacred mountain covered in snow!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  pt: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Portugal.", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Lisbon.", fact:"¡Tiene barquitos de pesca de colores!", celebration:"¡Lo lograste!", animal:null, food:null, sport:"¡Portugal juega al Fútbol! Su selección usa los colores Roja y verde." },
    en: { intro:"Open your eyes wide! We've arrived in Portugal.", location:"This country is located in Europe.", capital:"The most important city is called Lisbon.", fact:"It has colorful fishing boats!", celebration:"You did it!", animal:null, food:null, sport:"Portugal plays Football! Their national team wears Red and green." },
  },
  py: {
    es: { intro:"¡Tenemos una nueva aventura en Paraguay!", location:"Estamos en América, ¡en el país llamado Paraguay!", capital:"¿Sabías que la capital es Asunción?", fact:"¡Tiene selvas y ríos gigantes!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:"¡Paraguay juega al Fútbol! Su selección usa los colores Roja y blanca." },
    en: { intro:"We have a new adventure in Paraguay!", location:"We're in America, in the country called Paraguay!", capital:"Did you know the capital is Asunción?", fact:"It has jungles and giant rivers!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:"Paraguay plays Football! Their national team wears Red and white." },
  },
  qa: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Catar.", location:"Catar está en Asia.", capital:"Su capital es Doha.", fact:"¡Tiene ciudades modernas en medio del desierto!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:"¡Catar juega al Fútbol! Su selección usa los colores Vinotinto." },
    en: { intro:"Get ready to travel! Today we're going to Qatar.", location:"Qatar is in Asia.", capital:"Its capital is Doha.", fact:"It has modern cities right in the desert!", celebration:"You discovered it!", animal:null, food:null, sport:"Qatar plays Football! Their national team wears Maroon." },
  },
  ro: {
    es: { intro:"¡Nuestro próximo destino es Rumania!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Bucharest.", fact:"¡Tiene castillos escondidos entre montañas!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Romania!", location:"This country is located in Europe.", capital:"The most important city is called Bucharest.", fact:"It has castles hidden among the mountains!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  ru: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Rusia.", location:"Estamos en Europa, ¡en el país llamado Rusia!", capital:"¿Sabías que la capital es Moscow?", fact:"¡Es el país más grande del mundo!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Russia.", location:"We're in Europe, in the country called Russia!", capital:"Did you know the capital is Moscow?", fact:"It's the biggest country in the world!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  rw: {
    es: { intro:"¡Vamos a descubrir Ruanda juntos!", location:"Ruanda está en África.", capital:"Su capital es Kigali.", fact:"¡La llaman la tierra de las mil colinas!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Rwanda together!", location:"Rwanda is in Africa.", capital:"Its capital is Kigali.", fact:"It's called the land of a thousand hills!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  sa: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Arabia Saudí.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Riyadh.", fact:"¡Tiene desiertos gigantes de arena!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:"¡Arabia Saudí juega al Fútbol! Su selección usa los colores Verde." },
    en: { intro:"Open your eyes wide! We've arrived in Saudi Arabia.", location:"This country is located in Asia.", capital:"The most important city is called Riyadh.", fact:"It has giant sandy deserts!", celebration:"Your passport is growing!", animal:null, food:null, sport:"Saudi Arabia plays Football! Their national team wears Green." },
  },
  sd: {
    es: { intro:"¡Tenemos una nueva aventura en Sudán!", location:"Estamos en África, ¡en el país llamado Sudán!", capital:"¿Sabías que la capital es Khartoum?", fact:"¡Tiene más pirámides antiguas que Egipto!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Sudan!", location:"We're in Africa, in the country called Sudan!", capital:"Did you know the capital is Khartoum?", fact:"It has more ancient pyramids than Egypt!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  sn: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Senegal.", location:"Senegal está en África.", capital:"Su capital es Dakar.", fact:"¡Tiene playas hermosas junto al océano!", celebration:"¡Lo lograste!", animal:null, food:null, sport:"¡Senegal juega al Fútbol! Su selección usa los colores Blanca con detalles verdes y amarillos." },
    en: { intro:"Get ready to travel! Today we're going to Senegal.", location:"Senegal is in Africa.", capital:"Its capital is Dakar.", fact:"It has beautiful beaches by the ocean!", celebration:"You did it!", animal:null, food:null, sport:"Senegal plays Football! Their national team wears White with green and yellow trim." },
  },
  sg: {
    es: { intro:"¡Nuestro próximo destino es Singapur!", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Singapore.", fact:"¡Tiene árboles artificiales gigantes que brillan de noche!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Singapore!", location:"This country is located in Asia.", capital:"The most important city is called Singapore.", fact:"It has giant artificial trees that light up at night!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  sb: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Islas Salomón.", location:"Estamos en Oceanía, ¡en el país llamado Islas Salomón!", capital:"¿Sabías que la capital es Honiara?", fact:"¡Son casi mil islas verdes en el océano Pacífico!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Solomon Islands.", location:"We're in Oceania, in the country called Solomon Islands!", capital:"Did you know the capital is Honiara?", fact:"It's almost a thousand green islands in the Pacific Ocean!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  sl: {
    es: { intro:"¡Vamos a descubrir Sierra Leone juntos!", location:"Sierra Leone está en África.", capital:"Su capital es Freetown.", fact:"¡Tiene playas con arena blanca y palmeras!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Sierra Leone together!", location:"Sierra Leone is in Africa.", capital:"Its capital is Freetown.", fact:"It has beaches with white sand and palm trees!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  sv: {
    es: { intro:"¡Abre bien los ojos! Llegamos a El Salvador.", location:"Este país queda en América.", capital:"La ciudad más importante se llama San Salvador.", fact:"¡Tiene volcanes que se pueden ver desde lejos!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in El Salvador.", location:"This country is located in America.", capital:"The most important city is called San Salvador.", fact:"It has volcanoes you can see from far away!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  sm: {
    es: { intro:"¡Tenemos una nueva aventura en San Marino!", location:"Estamos en Europa, ¡en el país llamado San Marino!", capital:"¿Sabías que la capital es City of San Marino?", fact:"¡Es uno de los países más pequeños y antiguos del mundo!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in San Marino!", location:"We're in Europe, in the country called San Marino!", capital:"Did you know the capital is City of San Marino?", fact:"It's one of the smallest and oldest countries in the world!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  so: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Somalia.", location:"Somalia está en África.", capital:"Su capital es Mogadishu.", fact:"¡Tiene la costa más larga de toda África!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Somalia.", location:"Somalia is in Africa.", capital:"Its capital is Mogadishu.", fact:"It has the longest coastline in all of Africa!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  rs: {
    es: { intro:"¡Nuestro próximo destino es Serbia!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Belgrade.", fact:"¡Tiene fortalezas muy antiguas junto a los ríos!", celebration:"¡Fantástico!", animal:null, food:null, sport:"¡Serbia juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"Our next stop is Serbia!", location:"This country is located in Europe.", capital:"The most important city is called Belgrade.", fact:"It has very old fortresses by the rivers!", celebration:"Fantastic!", animal:null, food:null, sport:"Serbia plays Football! Their national team wears Red." },
  },
  ss: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Sudán del Sur.", location:"Estamos en África, ¡en el país llamado Sudán del Sur!", capital:"¿Sabías que la capital es Juba?", fact:"¡Tiene grandes sabanas donde viven jirafas!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in South Sudan.", location:"We're in Africa, in the country called South Sudan!", capital:"Did you know the capital is Juba?", fact:"It has big savannas where giraffes live!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  st: {
    es: { intro:"¡Vamos a descubrir Santo Tomé y Príncipe juntos!", location:"Santo Tomé y Príncipe está en África.", capital:"Su capital es São Tomé.", fact:"¡Son dos islas volcánicas donde crece mucho cacao!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover São Tomé and Príncipe together!", location:"São Tomé and Príncipe is in Africa.", capital:"Its capital is São Tomé.", fact:"It's two volcanic islands where lots of cacao grows!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  sr: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Surinam.", location:"Este país queda en América.", capital:"La ciudad más importante se llama Paramaribo.", fact:"¡Tiene selvas tropicales muy bien conservadas!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Suriname.", location:"This country is located in America.", capital:"The most important city is called Paramaribo.", fact:"It has very well-preserved tropical rainforests!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  sk: {
    es: { intro:"¡Tenemos una nueva aventura en Eslovaquia!", location:"Estamos en Europa, ¡en el país llamado Eslovaquia!", capital:"¿Sabías que la capital es Bratislava?", fact:"¡Tiene muchísimos castillos en las montañas!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Slovakia!", location:"We're in Europe, in the country called Slovakia!", capital:"Did you know the capital is Bratislava?", fact:"It has lots of castles in the mountains!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  si: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Eslovenia.", location:"Eslovenia está en Europa.", capital:"Su capital es Ljubljana.", fact:"¡Tiene un lago con una islita y una campana en el medio!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Slovenia.", location:"Slovenia is in Europe.", capital:"Its capital is Ljubljana.", fact:"It has a lake with a tiny island and a bell in the middle!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  se: {
    es: { intro:"¡Nuestro próximo destino es Suecia!", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Stockholm.", fact:"¡Ahí se pueden ver auroras boreales en el cielo!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:"¡Suecia juega al Fútbol! Su selección usa los colores Amarilla y azul." },
    en: { intro:"Our next stop is Sweden!", location:"This country is located in Europe.", capital:"The most important city is called Stockholm.", fact:"You can see the northern lights there!", celebration:"Another country explored!", animal:null, food:null, sport:"Sweden plays Football! Their national team wears Yellow and blue." },
  },
  sz: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Suazilandia.", location:"Estamos en África, ¡en el país llamado Suazilandia!", capital:"¿Sabías que la capital es Lobamba?", fact:"¡Tiene montañas verdes y reservas de animales!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Eswatini.", location:"We're in Africa, in the country called Eswatini!", capital:"Did you know the capital is Lobamba?", fact:"It has green mountains and animal reserves!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  sc: {
    es: { intro:"¡Vamos a descubrir Seychelles juntos!", location:"Seychelles está en África.", capital:"Su capital es Victoria.", fact:"¡Tiene tortugas gigantes que viven muchísimos años!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Seychelles together!", location:"Seychelles is in Africa.", capital:"Its capital is Victoria.", fact:"It has giant tortoises that live for a very long time!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  sy: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Siria.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Damascus.", fact:"¡Tiene una de las ciudades habitadas más antiguas del mundo!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Syria.", location:"This country is located in Asia.", capital:"The most important city is called Damascus.", fact:"It has one of the oldest continuously inhabited cities in the world!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  td: {
    es: { intro:"¡Tenemos una nueva aventura en Chad!", location:"Estamos en África, ¡en el país llamado Chad!", capital:"¿Sabías que la capital es N'Djamena?", fact:"¡Tiene un lago gigante compartido con varios países!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Chad!", location:"We're in Africa, in the country called Chad!", capital:"Did you know the capital is N'Djamena?", fact:"It has a giant lake shared with several countries!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  tg: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Togo.", location:"Togo está en África.", capital:"Su capital es Lomé.", fact:"¡Es un país angosto y largo junto al océano!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Togo.", location:"Togo is in Africa.", capital:"Its capital is Lomé.", fact:"It's a long, narrow country by the ocean!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  th: {
    es: { intro:"¡Nuestro próximo destino es Tailandia!", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Bangkok.", fact:"¡Tiene templos dorados hermosos!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Thailand!", location:"This country is located in Asia.", capital:"The most important city is called Bangkok.", fact:"It has beautiful golden temples!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  tj: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Tayikistán.", location:"Estamos en Asia, ¡en el país llamado Tayikistán!", capital:"¿Sabías que la capital es Dushanbe?", fact:"¡Tiene montañas tan altas que las llaman el Techo del Mundo!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Tajikistan.", location:"We're in Asia, in the country called Tajikistan!", capital:"Did you know the capital is Dushanbe?", fact:"It has mountains so tall they're called the Roof of the World!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  tm: {
    es: { intro:"¡Vamos a descubrir Turkmenistán juntos!", location:"Turkmenistán está en Asia.", capital:"Su capital es Ashgabat.", fact:"¡Tiene un cráter de gas que arde desde hace años, lo llaman la Puerta del Infierno!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Turkmenistan together!", location:"Turkmenistan is in Asia.", capital:"Its capital is Ashgabat.", fact:"It has a gas crater that's been burning for years, called the Door to Hell!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  tl: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Timor Oriental.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Dili.", fact:"¡Es una isla con montañas y playas de coral!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Timor-Leste.", location:"This country is located in Asia.", capital:"The most important city is called Dili.", fact:"It's an island with mountains and coral beaches!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  to: {
    es: { intro:"¡Tenemos una nueva aventura en Tonga!", location:"Estamos en Oceanía, ¡en el país llamado Tonga!", capital:"¿Sabías que la capital es Nuku'alofa?", fact:"¡Es un reino formado por muchísimas islas!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Tonga!", location:"We're in Oceania, in the country called Tonga!", capital:"Did you know the capital is Nuku'alofa?", fact:"It's a kingdom made up of many islands!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  tt: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Trinidad y Tobago.", location:"Trinidad y Tobago está en América.", capital:"Su capital es Port of Spain.", fact:"¡Ahí se inventaron los tambores metálicos llamados steelpan!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Trinidad and Tobago.", location:"Trinidad and Tobago is in America.", capital:"Its capital is Port of Spain.", fact:"That's where steel drum music called steelpan was invented!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  tn: {
    es: { intro:"¡Nuestro próximo destino es Túnez!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Tunis.", fact:"¡Tiene ruinas antiguas junto al mar Mediterráneo!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:"¡Túnez juega al Fútbol! Su selección usa los colores Roja." },
    en: { intro:"Our next stop is Tunisia!", location:"This country is located in Africa.", capital:"The most important city is called Tunis.", fact:"It has ancient ruins by the Mediterranean Sea!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:"Tunisia plays Football! Their national team wears Red." },
  },
  tr: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Turquía.", location:"Estamos en Asia, ¡en el país llamado Turquía!", capital:"¿Sabías que la capital es Ankara?", fact:"¡Tiene un mercado gigante con miles de tiendas!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:"¡Turquía juega al Fútbol! Su selección usa los colores Roja y blanca." },
    en: { intro:"Look where we've landed! We're in Türkiye.", location:"We're in Asia, in the country called Türkiye!", capital:"Did you know the capital is Ankara?", fact:"It has a giant market with thousands of shops!", celebration:"You discovered it!", animal:null, food:null, sport:"Türkiye plays Football! Their national team wears Red and white." },
  },
  tv: {
    es: { intro:"¡Vamos a descubrir Tuvalu juntos!", location:"Tuvalu está en Oceanía.", capital:"Su capital es Funafuti.", fact:"¡Es uno de los países más pequeños del mundo!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Tuvalu together!", location:"Tuvalu is in Oceania.", capital:"Its capital is Funafuti.", fact:"It's one of the smallest countries in the world!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  tz: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Tanzania.", location:"Este país queda en África.", capital:"La ciudad más importante se llama Dodoma.", fact:"¡Tiene la montaña más alta de África, el Kilimanjaro!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Tanzania.", location:"This country is located in Africa.", capital:"The most important city is called Dodoma.", fact:"It has Africa's tallest mountain, Kilimanjaro!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
  ug: {
    es: { intro:"¡Tenemos una nueva aventura en Uganda!", location:"Estamos en África, ¡en el país llamado Uganda!", capital:"¿Sabías que la capital es Kampala?", fact:"¡Ahí viven gorilas de montaña!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Uganda!", location:"We're in Africa, in the country called Uganda!", capital:"Did you know the capital is Kampala?", fact:"Mountain gorillas live there!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  ua: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Ucrania.", location:"Ucrania está en Europa.", capital:"Su capital es Kyiv.", fact:"¡Tiene campos gigantes de girasoles amarillos!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:"¡Ucrania juega al Fútbol! Su selección usa los colores Amarilla y azul." },
    en: { intro:"Get ready to travel! Today we're going to Ukraine.", location:"Ukraine is in Europe.", capital:"Its capital is Kyiv.", fact:"It has giant fields of yellow sunflowers!", celebration:"Your passport is growing!", animal:null, food:null, sport:"Ukraine plays Football! Their national team wears Yellow and blue." },
  },
  uy: {
    es: { intro:"¡Nuestro próximo destino es Uruguay!", location:"Este país queda en América.", capital:"La ciudad más importante se llama Montevideo.", fact:"¡Le encanta el fútbol y las playas!", celebration:"¡Fantástico!", animal:null, food:null, sport:"¡Uruguay juega al Fútbol! Su selección usa los colores Celeste." },
    en: { intro:"Our next stop is Uruguay!", location:"This country is located in America.", capital:"The most important city is called Montevideo.", fact:"It loves soccer and beaches!", celebration:"Fantastic!", animal:null, food:null, sport:"Uruguay plays Football! Their national team wears Sky blue." },
  },
  us: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Estados Unidos.", location:"Estamos en América, ¡en el país llamado Estados Unidos!", capital:"¿Sabías que la capital es Washington D.C.?", fact:"¡Ahí está la famosa Estatua de la Libertad!", celebration:"¡Lo lograste!", animal:"¡Y mira ese animal! Es un Águila calva. ¿Podés decirlo conmigo? ¡Águila calva!", food:"¡Qué rico! En Estados Unidos se come Hamburguesa.", sport:"¡Estados Unidos juega al Fútbol! Su selección usa los colores Blanca y azul." },
    en: { intro:"Look where we've landed! We're in United States.", location:"We're in America, in the country called United States!", capital:"Did you know the capital is Washington D.C.?", fact:"That's where the famous Statue of Liberty is!", celebration:"You did it!", animal:"And look at that animal! It's a Bald eagle. Can you say it with me?", food:"Yum! In United States, people eat Hamburger.", sport:"United States plays Football! Their national team wears White and navy blue." },
  },
  uz: {
    es: { intro:"¡Vamos a descubrir Uzbekistán juntos!", location:"Uzbekistán está en Asia.", capital:"Su capital es Tashkent.", fact:"¡Tiene ciudades antiguas en la histórica Ruta de la Seda!", celebration:"¡Sos un explorador increíble!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Uzbekistan together!", location:"Uzbekistan is in Asia.", capital:"Its capital is Tashkent.", fact:"It has ancient cities along the historic Silk Road!", celebration:"You're an amazing explorer!", animal:null, food:null, sport:null },
  },
  va: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Ciudad del Vaticano.", location:"Este país queda en Europa.", capital:"La ciudad más importante se llama Vatican City.", fact:"¡Es el país más pequeño de todo el mundo!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Vatican City.", location:"This country is located in Europe.", capital:"The most important city is called Vatican City.", fact:"It's the smallest country in the entire world!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  vc: {
    es: { intro:"¡Tenemos una nueva aventura en San Vicente y Granadinas!", location:"Estamos en América, ¡en el país llamado San Vicente y Granadinas!", capital:"¿Sabías que la capital es Kingstown?", fact:"¡Son muchas islitas pequeñas de aguas turquesas!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"We have a new adventure in Saint Vincent and the Grenadines!", location:"We're in America, in the country called Saint Vincent and the Grenadines!", capital:"Did you know the capital is Kingstown?", fact:"It's made up of many small islands with turquoise waters!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  ve: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Venezuela.", location:"Venezuela está en América.", capital:"Su capital es Caracas.", fact:"¡Tiene la catarata más alta del mundo!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:"¡Venezuela juega al Fútbol! Su selección usa los colores Vinotinto." },
    en: { intro:"Get ready to travel! Today we're going to Venezuela.", location:"Venezuela is in America.", capital:"Its capital is Caracas.", fact:"It has the tallest waterfall in the world!", celebration:"What a great explorer!", animal:null, food:null, sport:"Venezuela plays Football! Their national team wears Wine red (\"Vinotinto\")." },
  },
  vn: {
    es: { intro:"¡Nuestro próximo destino es Vietnam!", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Hanoi.", fact:"¡Tiene una bahía con miles de islas de piedra!", celebration:"¡Otro país conquistado!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Vietnam!", location:"This country is located in Asia.", capital:"The most important city is called Hanoi.", fact:"It has a bay with thousands of stone islands!", celebration:"Another country explored!", animal:null, food:null, sport:null },
  },
  vu: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Vanuatu.", location:"Estamos en Oceanía, ¡en el país llamado Vanuatu!", capital:"¿Sabías que la capital es Port Vila?", fact:"¡Tiene volcanes activos que se pueden visitar!", celebration:"¡Tu pasaporte está creciendo!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in Vanuatu.", location:"We're in Oceania, in the country called Vanuatu!", capital:"Did you know the capital is Port Vila?", fact:"It has active volcanoes you can visit!", celebration:"Your passport is growing!", animal:null, food:null, sport:null },
  },
  ws: {
    es: { intro:"¡Vamos a descubrir Samoa juntos!", location:"Samoa está en Oceanía.", capital:"Su capital es Apia.", fact:"¡Tiene islas rodeadas de agua color turquesa!", celebration:"¡Fantástico!", animal:null, food:null, sport:null },
    en: { intro:"Let's discover Samoa together!", location:"Samoa is in Oceania.", capital:"Its capital is Apia.", fact:"It has islands surrounded by turquoise water!", celebration:"Fantastic!", animal:null, food:null, sport:null },
  },
  ye: {
    es: { intro:"¡Abre bien los ojos! Llegamos a Yemen.", location:"Este país queda en Asia.", capital:"La ciudad más importante se llama Sana'a.", fact:"¡Tiene una isla con árboles con forma de paraguas gigantes!", celebration:"¡Lo lograste!", animal:null, food:null, sport:null },
    en: { intro:"Open your eyes wide! We've arrived in Yemen.", location:"This country is located in Asia.", capital:"The most important city is called Sana'a.", fact:"It has an island with trees shaped like giant umbrellas!", celebration:"You did it!", animal:null, food:null, sport:null },
  },
  za: {
    es: { intro:"¡Tenemos una nueva aventura en Sudáfrica!", location:"Estamos en África, ¡en el país llamado Sudáfrica!", capital:"¿Sabías que la capital es Pretoria?", fact:"¡Ahí viven leones, elefantes y jirafas!", celebration:"¡Sos un explorador increíble!", animal:"¡Y mira ese animal! Es un León africano. ¿Podés decirlo conmigo? ¡León africano!", food:"¡Qué rico! En Sudáfrica se come Potjiekos (guiso sudafricano).", sport:"¡Sudáfrica juega al Rugby! Su selección usa los colores Verde y dorada." },
    en: { intro:"We have a new adventure in South Africa!", location:"We're in Africa, in the country called South Africa!", capital:"Did you know the capital is Pretoria?", fact:"Lions, elephants and giraffes live there!", celebration:"You're an amazing explorer!", animal:"And look at that animal! It's a African lion. Can you say it with me?", food:"Yum! In South Africa, people eat Potjiekos (South African stew).", sport:"South Africa plays Rugby! Their national team wears Green and gold." },
  },
  zm: {
    es: { intro:"¡Prepárate para viajar! Hoy vamos a Zambia.", location:"Zambia está en África.", capital:"Su capital es Lusaka.", fact:"¡Comparte la catarata Victoria, una de las más grandes del mundo!", celebration:"¡Lo descubriste!", animal:null, food:null, sport:null },
    en: { intro:"Get ready to travel! Today we're going to Zambia.", location:"Zambia is in Africa.", capital:"Its capital is Lusaka.", fact:"It shares Victoria Falls, one of the biggest waterfalls in the world!", celebration:"You discovered it!", animal:null, food:null, sport:null },
  },
  zw: {
    es: { intro:"¡Nuestro próximo destino es Zimbabue!", location:"Este país queda en África.", capital:"La ciudad más importante se llama Harare.", fact:"¡Tiene una catarata gigante llamada Victoria!", celebration:"¡Excelente!", animal:null, food:null, sport:null },
    en: { intro:"Our next stop is Zimbabwe!", location:"This country is located in Africa.", capital:"The most important city is called Harare.", fact:"It has a giant waterfall called Victoria Falls!", celebration:"Excellent!", animal:null, food:null, sport:null },
  },
  ps: {
    es: { intro:"¡Mira dónde hemos llegado! Estamos en Palestina.", location:"Estamos en Asia, ¡en el país llamado Palestina!", capital:"¿Sabías que la capital es Ramala (centro administrativo)?", fact:"¡Tiene olivares muy antiguos que dan un aceite de oliva delicioso!", celebration:"¡Qué gran explorador!", animal:null, food:null, sport:null },
    en: { intro:"Look where we've landed! We're in State of Palestine.", location:"We're in Asia, in the country called State of Palestine!", capital:"Did you know the capital is Ramala (centro administrativo)?", fact:"It has very old olive groves that produce delicious olive oil!", celebration:"What a great explorer!", animal:null, food:null, sport:null },
  },
};

// ============================================================
// Assets de audio real (MP3), cuando existan.
// Estructura: { [countryId]: { es: { intro:"path", ... }, en: {...} } }
// Vacío por ahora — no se generaron archivos porque este entorno no
// tiene herramienta de generación/grabación de audio. Queda lista la
// arquitectura para cuando se agreguen los MP3 reales.
// ============================================================
const AUDIO_ASSETS = {};

// ---------- Resolver único (así debe leerse este archivo desde app.js) ----------
// Devuelve { text, audioPath, source } — nunca revienta si falta algo.
function getCountryAudio(countryId, lang, type){
  const entry = AUDIO_DATA[countryId];
  const text = entry && entry[lang] ? entry[lang][type] : null;
  const mp3 = AUDIO_ASSETS[countryId] && AUDIO_ASSETS[countryId][lang] && AUDIO_ASSETS[countryId][lang][type];
  return {
    text: text || null,          // null = todavía no verificado (NEEDS_REVIEW)
    audioPath: mp3 || null,      // ruta al mp3 real, si existe
    source: mp3 ? "mp3" : (text ? "tts" : "none"),
  };
}

// ---------- Validación del catálogo completo ----------
function validateAudioCatalog(){
  const TYPES = ["intro","location","capital","animal","food","sport","fact","celebration"];
  const report = { countries:0, langs:2, totalSlots:0, ready:0, needsReview:0, missingCountry:[], duplicateText:{}, issues:[] };
  const seenTexts = {};
  Object.keys(AUDIO_DATA).forEach(id=>{
    report.countries++;
    ["es","en"].forEach(lang=>{
      const entry = AUDIO_DATA[id][lang];
      if(!entry){ report.issues.push(id+':'+lang+' falta por completo'); return; }
      TYPES.forEach(type=>{
        report.totalSlots++;
        const text = entry[type];
        if(text){
          report.ready++;
          const key = lang+':'+type+':'+text;
          seenTexts[key] = (seenTexts[key]||[]).concat(id);
        } else {
          report.needsReview++;
        }
      });
    });
  });
  Object.keys(seenTexts).forEach(k=>{
    if(seenTexts[k].length > 1 && !k.includes(':celebration:')){
      // celebration usa un pool compartido a propósito (no es un error)
      report.duplicateText[k] = seenTexts[k];
    }
  });
  return report;
}

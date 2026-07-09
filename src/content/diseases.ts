import { PageContent } from './types';

export const diseasesContent: Record<string, PageContent> = {
  'beyin-tumorleri-nedir-belirtileri-ve-tanisi': {
    title: 'Beyin Tümörleri Nedir? Belirtileri ve Tanısı',
    definition: '<strong>Beyin tümörleri</strong>, kafatası içi gibi kapalı ve sınırlı bir alanda, beyin dokusunu oluşturan hücrelerin veya beyni çevreleyen zarların kontrolsüz, anormal ve hızlı bir şekilde çoğalmasıyla karakterize kitlelerdir. Beyin tümörleri birincil (primer) ve ikincil (metastatik) olarak iki ana gruba ayrılır. Birincil tümörler beynin kendi dokularından (örneğin glial hücreler) başlarken, ikincil tümörler vücudun başka bir organındaki (akciğer, meme, kolon vb.) kanserin kan yoluyla beyne sıçraması ile oluşur. Tümörün iyi huylu (selim) veya kötü huylu (habis) olması fark etmeksizin, kapalı kafatası boşluğunda yer kaplaması nedeniyle hepsi klinik olarak hayati önem taşır.',
    mechanism: 'Beyin hücrelerindeki veya çevre zarlardaki genetik mutasyonlar, hücrelerin büyüme, bölünme ve ölüm (apoptoz) döngüsünü bozar. Bu durum anormal damarlanmayı (anjiyogenez) tetikler ve hızlı büyüyen kitle, etrafındaki sağlam beyin dokusunda vazojenik ödem (sıvı birikmesi) oluşturur. Kan-beyin bariyerinin bozulması, inflamasyon mediyatörlerinin bölgeye göç etmesine ve kafa içi basıncın artmasına (KİBİS) yol açar. Sıkışan beyin dokusu, normal nöral elektriksel iletimi bozarak epilepsi nöbetlerini tetikler veya ezilen nöron yollarına bağlı olarak felç durumlarını meydana getirir.',
    clinicalProcess: 'Bir beyin tümörü şüphesinde tanı süreci, hastanın nörolojik durumunun milimetrik incelenmesiyle başlar. Göz dibi muayenesinde kafa içi basınç artışına bağlı papil ödemi kontrol edilir. 3 Tesla kontrastlı MRG, spektroskopi ve fMRI gibi ileri radyolojik tetkiklerle kitlenin cinsi, metabolik yapısı ve beynin kritik bölgeleriyle olan ilişkisi haritalandırılır. Kesin tanı ise cerrahi olarak çıkarılan dokunun histopatolojik analiziyle konur. Erken tanı, cerrahi başarı oranını ve hastanın yaşam süresini doğrudan artıran en kritik faktördür.',
    symptoms: [
      '<strong>İnatçı Baş Ağrısı:</strong> Özellikle sabaha karşı daha şiddetli olan, öksürmekle veya eğilmekle artan, klasik ağrı kesicilere dirençli baş ağrıları.',
      '<strong>Fışkırır Tarzda Kusma:</strong> Bulantı hissi eşlik etmeksizin, kafa içi basıncın artması nedeniyle birdenbire ortaya çıkan kusmalar.',
      '<strong>İlk Kez Görülen Epilepsi Nöbeti:</strong> Yetişkinlik döneminde daha önce hiçbir sara öyküsü yokken aniden ortaya çıkan kasılma veya bayılma nöbetleri.',
      '<strong>Mental ve Karakteristik Değişiklikler:</strong> Unutkanlık, kişilik değişiklikleri, karar verme yeteneğinde bozulma veya çevreye karşı kayıtsızlık.'
    ],
    diagnosis: [
      '<strong>Beyin MRG (Multi-parametrik):</strong> Tümörün anatomik yerleşimini ve kontrast tutulum karakterini en net gösteren tetkik.',
      '<strong>MR Spektroskopi (MRS):</strong> Tümörün biyokimyasal metabolitlerini ölçerek iyi/kötü huylu ayrımı yapmaya yardımcı olan ileri MR yöntemi.',
      '<strong>Fonksiyonel MRG (fMRI):</strong> Tümörün konuşma, motor ve görme gibi hayati merkezlerle olan mesafesini belirleyen haritalama testi.'
    ],
    treatments: [
      '<strong>Mikrocerrahi Rezeksiyon:</strong> Sağlam beyin dokusunu koruyarak tümörün mikroskop altında maksimum oranda temizlenmesi.',
      '<strong>Radyoterapi ve Stereotaktik Radyocerrahi (Gamma Knife):</strong> Yüksek enerjili ışınlarla tümör hücrelerinin DNA\'sını bozarak büyümesini durdurma tedavisi.',
      '<strong>Kemoterapi ve Akıllı İlaçlar:</strong> Kan-beyin bariyerini geçebilen kemoterapötik ajanlar ve tümör damarlanmasını engelleyen hedefe yönelik ilaçlar.'
    ],
    whenToSeeDoctor: 'Eskiye kıyasla karakteri değişmiş, sabahları uykudan uyandıran baş ağrılarınız varsa, vücudunuzun bir yarısında karıncalanma veya güçsüzlük yaşıyorsanız veya kelimeleri seçmekte ve akıcı konuşmakta zorlanıyorsanız derhal uzman hekime başvurmalısınız.',
    postTreatment: 'Tedavi sonrasında hastanın beyin ödemi ve nöbet riski ilaçlarla kontrol altında tutulur. Patoloji raporuna göre onkoloji konseyleri tarafından takip ve ek tedavi süreçleri belirlenir. Gerekli durumlarda nöro-kognitif rehabilitasyon ve fizik tedavi programları hemen devreye sokularak hastanın günlük hayata adaptasyonu hızlandırılır.',
    lifestyle: 'Antioksidan yönünden zengin, işlenmiş şekerlerden uzak anti-enflamatuar beslenme tercih edilmelidir. Radyasyon içeren cihazlardan (cep telefonu, baz istasyonu) uzak durulmalıdır. Kaliteli bir uyku düzeni beyin dokusunun kendini onarması için şarttır.',
    faq: [
      { question: 'Her beyin tümörü kanser midir?', answer: 'Hayır, beyin tümörlerinin önemli bir kısmı (örneğin menenjiomlar) iyi huyludur ve ameliyatla tamamen çıkarıldıklarında ek bir tedaviye gerek kalmadan tam şifa sağlanabilir.' },
      { question: 'Beyin tümörü ameliyatı sonrası kişilik değişir mi?', answer: 'Eğer tümör beynin ön lobunda (alın bölgesi - frontal lob) yerleştiyse ameliyat öncesi kişilik değişiklikleri olabilir. Ameliyat sonrasında baskının kalkmasıyla bu durum genellikle normale döner.' }
    ]
  },
  'beyincik-sarkmasi-chiari-malformasyonu-nedir': {
    title: 'Beyincik Sarkması (Chiari Malformasyonu) Nedir?',
    definition: '<strong>Beyincik sarkması (Chiari Malformasyonu)</strong>, kafatasının arka çukurunun (posterior fossa) doğuştan normalden küçük veya sığ olması sebebiyle, bu bölgeye sığmayan beyincik bademciklerinin (tonsillerinin) omurilik kanalına doğru kayması (fıtıklaşması) durumudur. Bu anatomik bozukluk, kafa içi ile omurilik arasındaki doğal geçiş bölgesi olan foramen magnumda sıkışıklığa sebep olur. Sıkışan beyincik tonsilleri, beyin omurilik sıvısının (BOS) serbest dolaşımını engelleyerek hem kafa içi basınç artışına hem de omurilik içinde kist (syringomyeli) oluşmasına yol açar.',
    mechanism: 'Kafatasının gelişimsel olarak yetersiz büyümesi, beyincik dokusunu aşağıya doğru iter. Tonsiller, omurilik kanalına sarktıkça (genellikle 5 mm ve üzeri dikey sarkma) her kalp atımında BOS akımını engeller. BOS akımının sekteye uğraması, omurilik merkez kanalındaki epandimal hücrelerin gerilmesine ve omurilik içinde siringomiyeli adı verilen sıvı dolu kistlerin oluşmasına neden olur. Bu durum, omurilikteki sinir liflerini ezerek duyu kayıplarına ve ilerleyici nörolojik hasara zemin hazırlar.',
    clinicalProcess: 'Chiari Malformasyonu tanısı, hastanın spesifik baş ağrısı şikayetleri ve kollarındaki his değişiklikleri üzerine konur. Tanı aşamasında Beyin ve Servikal MRG en önemli araçtır. BOS dolaşımındaki engeli objektif olarak göstermek için Cine-MRG (akım çalışması) istenir. Eğer sarkma bulguları ağır değilse ve siringomiyeli eşlik etmiyorsa hasta yakından takip edilir. Ancak ilerleyen semptomlar ve genişleyen bir kist varsa posterior fossa dekompresyonu ameliyatı kararı verilir.',
    symptoms: [
      '<strong>Ense ve Baş Arkası Ağrısı:</strong> Öksürme, hapşırma, ıkınma veya başı arkaya doğru bükme ile tetiklenen, enseden başlayıp zonklayıcı karakterde olan baş ağrıları.',
      '<strong>Kollarda Duyu Dissosiasyonu:</strong> Ellerde ve omuzlarda sıcak ve soğuğu hissedememe; ancak dokunma duyusunun korunması (örneğin elinin yandığını acıyla değil ancak görerek fark etme).',
      '<strong>Denge Bozuklukları ve Baş Dönmesi:</strong> Yürürken yalpalamak, sarhoşvari yürüme eğilimi, ince koordinasyon hareketlerinde zorlanma.'
    ],
    diagnosis: [
      '<strong>Kranial ve Spinal MRG:</strong> Beyincik bademciklerinin milimetrik sarkma miktarını ve omurilik içi kist varlığını gösteren görüntüleme.',
      '<strong>BOS Akım MRG (Cine-MRI):</strong> Beyin omurilik sıvısının kafatası ile omurilik arasındaki geçiş hızını ve engellerini analiz eden dinamik tetkik.'
    ],
    treatments: [
      '<strong>Klinik Takip:</strong> Semptomu olmayan, tesadüfen saptanan hafif sarkmalarda yıllık klinik ve radyolojik izlem yeterlidir.',
      '<strong>Posterior Fossa Dekompresyonu:</strong> Kafatası arka kısmından kemik alınarak sıkışıklığın kaldırılması ve beyincik bademciklerine yer açılması ameliyatı.',
      '<strong>Duraplastı ve Yama Uygulaması:</strong> Beyin zarı genişletilerek BOS havuzunun fizyolojik olarak yeniden oluşturulması.'
    ],
    whenToSeeDoctor: 'Özellikle hapşırdığınızda veya öksürdüğünüzde ense kökünüzde yırtılır gibi ani bir baş ağrısı oluyorsa, ellerinizde uyuşma ve nesnelerin sıcaklığını algılamakta gecikme yaşıyorsanız acilen beyin cerrahına başvurmalısınız.',
    postTreatment: 'Ameliyat sonrası hastaların ense kaslarının esnekliğini korumak için hafif boyun hareketleri yapması önerilir. Yara yeri sızıntısı veya baş ağrısı durumunda BOS kaçağı riski araştırılır. Kontrol MRG\'leri ile kistlerin küçülme eğiliminde olduğu teyit edilir.',
    lifestyle: 'Boynu aşırı geriye zorlayan hareketlerden, ağır halter sporlarından ve ani boyun kütletme hareketlerinden kesinlikle kaçınılmalıdır. Kabızlıktan korunmak için lifli gıdalarla beslenilmeli ve bol su tüketilmelidir.',
    faq: [
      { question: 'Beyincik sarkması ilerleyen yaşlarda sonradan oluşabilir mi?', answer: 'Chiari Malformasyonu genellikle doğuştan gelen yapısal bir durumdur ancak belirtiler sıklıkla 20-40 yaşlar arasında, omurilikteki kistin büyümesiyle ortaya çıkar.' },
      { question: 'Ameliyat olmazsam ne olur?', answer: 'İleri derece belirtileri olan ve ameliyat edilmeyen hastalarda, omurilikteki kistin büyümesine bağlı olarak ellerde kalıcı kas erimeleri ve bacaklarda kalıcı güç kayıpları gelişebilir.' }
    ]
  },
  'omurilik-tumorleri-ve-yasamsal-riskleri': {
    title: 'Omurilik Tümörleri ve Yaşamsal Riskleri',
    definition: '<strong>Omurilik tümörleri</strong>, spinal kanal içerisinde yer alan omurilik dokusundan, zarlarından veya omurilikten çıkan sinir köklerinden köken alan tüm tümöral oluşumlardır. Yerleşim yerine göre omuriliğin dışında (ekstradural veya intradural-ekstramedüller) ya da doğrudan omurilik dokusunun içinde (intramedüller) yer alabilirler. Omurilik tümörleri, vücudun tüm hareket ve duyu iletimini sağlayan bu ana hattı sıkıştırarak kalıcı felçlere, nefes darlığına ve organ yetmezliklerine yol açabilecek yüksek hayati riskler barındırır.',
    mechanism: 'Spinal kanaldaki tümör dokusu büyüdükçe, kapalı kemik kanalda yer kalmaz ve omurilik dokusu kemik duvar ile tümör arasında ezilir. Bu durum spinal kordun vasküler beslenmesini bozar; mikrosirkülasyon durur, iskemi ve ödem gelişir. Hücre düzeyinde nöral iletim bloke olur. Üst servikal (boyun) seviyesindeki tümörler, solunumu sağlayan diyafram sinirini (phrenic nerve) ezerek solunum felcine neden olabilir. Alt seviyelerdeki tümörler ise mesane ve bağırsak kontrolünü sağlayan otonom merkezleri yıkarak kalıcı organ disfonksiyonlarına yol açar.',
    clinicalProcess: 'Tanı süreci, hastanın sinsi başlayan ve fıtık tedavilerine yanıt vermeyen ağrıları ile tetiklenir. Detaylı nörolojik muayenede, vücuttaki duyu seviyesi kayıpları (örneğin göğüsten aşağısını hissetmeme) haritalandırılır. İlaçlı kontrastlı tüm omurga MRG çekilerek tümörün milimetrik sınırları belirlenir. Ameliyat kararı verildiğinde, nöromonitörizasyon cihazları kurularak ameliyat boyunca sinir sinyalleri kesintisiz izlenir. Amaç, omuriliğe milimetrik bir zarar dahi vermeden tümörü tam sınırından sıyırarak çıkarmaktır.',
    symptoms: [
      '<strong>Uykudan Uyandıran Gece Ağrısı:</strong> Fıtık ağrılarından farklı olarak, istirahat halindeyken veya gece yatarken artan, lokalize kemik/omurga ağrıları.',
      '<strong>Duyu Seviyesi Kaybı:</strong> Vücutta net bir sınır çizgisinin altında kalan tüm bölgelerde (örneğin göbek deliğinin altı) his kaybı ve soğukluk hissi.',
      '<strong>İdrar ve Gaita Kaçırma:</strong> Mesane kontrolünün kaybolması, idrara çıkamama veya kaçırma, kabızlık veya gaita kontrolünün yitirilmesi.',
      '<strong>Kollarda veya Bacaklarda Spastisite:</strong> Bacakların aniden kasılması, adımları atmakta zorlanma ve sert yürüme.'
    ],
    diagnosis: [
      '<strong>Kontrastlı Total Spinal MRG:</strong> Boyun, sırt ve bel omurga kanalının ilaçlı olarak taranarak tümörün yerinin ve cinsinin saptanması.',
      '<strong>Spinal BT ve PET-CT:</strong> Kemik harabiyetini ve tümörün akciğer veya meme gibi başka bir organdan metastaz yapıp yapmadığını gösterme.'
    ],
    treatments: [
      '<strong>Mikrocerrahi ile Tümörün Çıkarılması:</strong> İleri teknoloji mikroskop altında sinir koruyucu tekniklerle tümör dokusunun temizlenmesi.',
      '<strong>Ultrasonik Cerrahi Aspiratör (CUSA):</strong> Tümörü titreşimli dalgalarla eriterek emen ve sağlam sinir dokularını koruyan özel sistem kullanımı.',
      '<strong>Kemo-Radyoterapi:</strong> Tümörün patolojik türüne göre (örneğin kötü huylu metastazlar veya astrositomlar) uygulanan onkolojik tedaviler.'
    ],
    whenToSeeDoctor: 'Sırtınızda veya belinizde inatçı bir ağrı var ve bu ağrıya ek olarak bacaklarınızda güç kaybı, idrar kontrolünüzde bozulma veya his kaybı geliştiyse hiç vakit kaybetmeden kontrastlı MRG tetkiki yaptırmalısınız.',
    postTreatment: 'Ameliyat bittikten sonra hasta yakından izlenir. Patoloji sonucuna göre tedavi planı şekillenir. İyi huylu kitlelerde cerrahi genellikle tam şifa sağlar. Nörolojik kaybı olan hastalar ameliyattan sonraki ilk günlerden itibaren yoğun bir fizik tedavi programına alınarak kas güçleri geri kazandırılmaya çalışılır.',
    lifestyle: 'Nöral iyileşmeyi hızlandırmak için doktor kontrolünde B12, folik asit ve Omega-3 takviyeleri alınmalıdır. Kas erimelerini önlemek için her gün düzenli pasif ve aktif hareket egzersizleri yapılmalıdır. Düzenli takip MRG\'leri aksatılmamalıdır.',
    faq: [
      { question: 'Omurilik tümörü ameliyatından sonra kalıcı felç kalma olasılığı nedir?', answer: 'Tümörün yerleşimi çok önemlidir. Omuriliğin içindeki (intramedüller) tümörlerde risk nispeten yüksekken, omuriliğin dışındaki (iyi huylu schwannom veya menenjiom gibi) tümörlerde nöromonitörizasyon koruması altında felç kalma riski %1-2 civarındadır.' },
      { question: 'Sırt ağrım var, tümör mü fıtık mı olduğunu nasıl anlarım?', answer: 'Fıtık ağrısı hareketle artar, istirahatle azalır. Tümör ağrısı ise sıklıkla istirahat halindeyken, gece yatakta artar ve hastayı uykudan uyandırır. Kesin ayrım kontrastlı MRG ile yapılır.' }
    ]
  },
  'boyun-sagligi-boyun-fitigi-ve-kanal-daralmasi-rehberi': {
    title: 'Boyun Sağlığı, Boyun Fıtığı ve Kanal Daralması Rehberi',
    definition: '<strong>Boyun sağlığı</strong>, başın dengeli taşınması ve içerisindeki kritik omurilik yapısının korunması için hayati önem taşır. Boyun fıtığı (servikal disk hernisi), boyun omurları arasındaki disklerin yırtılarak sinirleri sıkıştırmasıdır. Boyun kanal daralması (servikal spinal stenoz) ise yaşlanmayla birlikte omurilik kanalının daralarak içinden geçen omuriliği adeta boğmasıdır. Bu rehber, boyun sağlığınızı korumak, hastalıkları erken fark etmek ve doğru tedavi yöntemlerini bulmak amacıyla hazırlanmış kapsamlı bir kılavuzdur.',
    mechanism: 'Boyun omurgası (C1-C7), başın dinamik hareketlerini sağlarken içinden geçen omuriliği korur. Kötü postür (örneğin sürekli telefona bakmak), disklerin erken su kaybetmesine (dehidratasyon) sebep olur. Yük binen disk yırtılırsa boyun fıtığı gelişir. Yaşla birlikte faset eklemlerin kireçlenmesi ve ligamentum flavumun kalınlaşması ise omurilik kanalını daraltır. Bu durum, omurilik içinde basınç yaratarak ellerde ve bacaklarda kalıcı nöronal hasara (servikal miyelopati) neden olur.',
    clinicalProcess: 'Boyun şikayetleriyle başvuran hastada öncelikle kolların refleksleri, duyu alanları ve kas güçleri muayene edilir. Servikal MRG ile fıtık ve kanal daralma derecesi netleştirilir. Eğer hastada ilerleyici bir güç kaybı veya dengesizlik yoksa, tedaviye fizik tedavi, anti-inflamatuar ilaçlar ve ağrı tedavileri ile başlanır. Ancak el becerilerinde kayıp, bacaklarda kasılma veya yürüme güçlüğü (miyelopati bulgusu) gelişmişse, sinirleri kurtarmak amacıyla mikrocerrahi ameliyatı önerilir.',
    symptoms: [
      '<strong>Kola Vuran Elektriklenme Ağrısı:</strong> Boyundan başlayarak omuza ve parmak uçlarına kadar yayılan, yanıcı ve saplanıcı ağrılar.',
      '<strong>Ellerde İnce Beceri Kaybı:</strong> Yazı yazarken zorlanma, çorba kaşığını titretme, gömlek düğmelerini iliklerken parmakların uyuşması.',
      '<strong>Boyun Sertliği ve Tutukluğu:</strong> Sabahları boynu hareket ettirmekte zorlanma, omuzlarda ve sırt kaslarında geçmeyen kronik spazmlar.'
    ],
    diagnosis: [
      '<strong>Servikal Spinal MRG:</strong> Disklerin, fıtıkların, sinir köklerinin ve omuriliğin durumunu en ince detayına kadar gösteren temel tetkik.',
      '<strong>Servikal EMG:</strong> Koldaki uyuşukluğun boyun fıtığından mı yoksa el bileğindeki sinir sıkışmasından (karpal tünel) mı kaynaklandığını ayıran test.'
    ],
    treatments: [
      '<strong>Kişiselleştirilmiş Fizik Tedavi:</strong> Boyun çekme (traksiyon), lazer tedavileri ve boyun kaslarını güçlendirici özel egzersiz protokolleri.',
      '<strong>Girişimsel Ağrı Tedavileri:</strong> Boyun eklemlerine yapılan faset enjeksiyonları veya epidural steroid enjeksiyonları ile ödemin azaltılması.',
      '<strong>Mikrocerrahi (ACDF):</strong> Boynun önünden girilerek mikroskop altında fıtığın temizlenmesi ve yerine kafes yerleştirilmesi operasyonu.'
    ],
    whenToSeeDoctor: 'Elinizden nesneleri sık sık düşürmeye başladıysanız, kollarınızda belirgin kas zayıflığı (örneğin kolu yukarı kaldıramama) varsa veya yürürken bacaklarınızda kasılma ve dengesizlik yaşıyorsanız acilen bir uzmana görünmelisiniz.',
    postTreatment: 'Tedavilerden sonra boyun kaslarının güçlü tutulması nüksleri önler. Ameliyat olan hastalar ilk birkaç hafta boyunlarını zorlamamalı ve ağır kaldırmamalıdır. İyileşme sonrasında ise düzenli boyun egzersizleri hayatın bir parçası haline getirilmelidir.',
    lifestyle: 'Bilgisayar monitörünüzün üst sınırının göz hizanızda olmasına dikkat edin. Telefonunuzu aşağıda değil, göz hizasında tutarak kullanın. Yüz üstü yatmak yerine yan veya sırt üstü yatmayı tercih edin ve boyun çukurunu destekleyen yastıklar kullanın. Sigara içmeyin.',
    faq: [
      { question: 'Boyun fıtığı ameliyat edilmeden geçer mi?', answer: 'Evet, boyun fıtıklarının %90\'dan fazlası ameliyatsız yöntemlerle (ilaçlar, fizik tedavi, enjeksiyonlar) tamamen kontrol altına alınabilir ve hasta ağrısız yaşamına dönebilir.' },
      { question: 'Her boyun ağrısı fıtık mıdır?', answer: 'Hayır, boyun ağrılarının çok büyük bir kısmı duruş bozukluğu, kas spazmı, stres veya faset eklem kireçlenmelerinden kaynaklanır. Fıtık ağrısı genellikle boyundan ziyade kola vuran ağrıyla kendini gösterir.' }
    ]
  },
  'bel-sagligi-bel-fitigi-ve-kanal-daralmasi-rehberi': {
    title: 'Bel Sağlığı, Bel Fıtığı ve Kanal Daralması Rehberi',
    definition: '<strong>Bel sağlığı</strong>, vücudun ağırlık merkezini oluşturması ve tüm kinetik zincirin yükünü taşıması nedeniyle fiziksel bağımsızlığımızın temel taşıdır. Bel fıtığı (lomber disk hernisi), bel omurları arasındaki amortisör görevi gören disklerin yırtılarak bacak sinirlerini sıkıştırmasıdır. Bel kanal darlığı (lomber spinal stenoz) ise omurilik kanalının daralarak bacaklara giden sinirlerin kansız kalmasına neden olmasıdır. Bu rehber, bel sağlığını korumak ve bel hastalıklarının tedavisinde doğru adımları atmak için hazırlanmıştır.',
    mechanism: 'Bel omurgası (L1-S1), üst vücudun tüm yükünü leğen kemiğine aktarır. Diskler sürekli basınca maruz kalır. Ağır kaldırmak, ani dönmek veya kilo almak disklerin yapısını bozarak fıtıklaşmaya yol açar. Kanal darlığında ise yaşla birlikte faset eklemlerin kireçlenerek büyümesi ve sarı bağın (ligamentum flavum) kalınlaşması kanalı daraltır. Yürüyüş esnasında bacak sinirlerinin kan dolaşımı engellenir ve bacaklarda şiddetli kasılma, ağrı ve yürüme kaybı (nörojenik klodikasyo) ortaya çıkar.',
    clinicalProcess: 'Bel şikayetleri ile gelen hastada fiziksel muayene çok önemlidir. Düz bacak kaldırma testiyle sinir hassasiyeti ölçülür, ayak başparmağı gücü değerlendirilir. Lomber MRG ile fıtık veya darlık seviyeleri tespit edilir. İlerleyici güç kaybı (ayak düşmesi) veya idrar kaçırma yoksa, öncelikle yatak istirahatı, fizik tedavi, ilaç tedavisi veya bel enjeksiyonları uygulanır. Bu tedavilerden fayda görmeyen ve yürüme mesafesi ciddi şekilde kısıtlanan hastalara mikrocerrahi ameliyatları planlanır.',
    symptoms: [
      '<strong>Siyatik Ağrısı:</strong> Belden başlayıp kalça içinden geçerek uyluk arkasına, dize ve ayak parmaklarına yayılan keskin, çekme tarzında ağrı.',
      '<strong>Yürüme Mesafesinin Kısalması:</strong> Belirli bir mesafe yürüdükten sonra bacaklarda uyuşma ve dermansızlık olması; durup öne doğru eğilince ağrının geçmesi.',
      '<strong>Ayakta Uyuşma ve Güçsüzlük:</strong> Ayak bileğinde veya başparmakta kuvvet kaybı olması, parmak ucunda veya topukta yürürken zorlanma.'
    ],
    diagnosis: [
      '<strong>Lomber MRG (Yüksek Çözünürlüklü):</strong> Fıtığın büyüklüğünü, yönünü, patlayan parçanın nereye düştüğünü ve kanalın daralma derecesini gösteren altın standart.',
      '<strong>Lomber BT ve Röntgen:</strong> Omurgadaki kireçlenmeleri ve omurlar arasındaki stabilite kaybını veya kaymaları değerlendiren görüntülemeler.'
    ],
    treatments: [
      '<strong>Konservatif Tedavi ve İlaçlar:</strong> Akut dönemde kısa süreli istirahat, kas gevşeticiler, anti-inflamatuarlar ve nöropatik ağrı ilaçları.',
      '<strong>Epidural ve Transforaminal Enjeksiyonlar:</strong> Sıkışan sinir kökü çevresine yapılan mikro-enjeksiyonlarla lokal inflamasyonun ve ödemin hızla kurutulması.',
      '<strong>Mikrocerrahi (Mikrodisektomi):</strong> Mikroskop altında sinirlere zarar vermeden fıtığın temizlenmesi ve kanalın rahatlatılması operasyonu.'
    ],
    whenToSeeDoctor: 'Ayağınızda takılma oluyorsa (ayak düşmesi), bacaklarınızda ve apış arası bölgenizde uyuşukluk yerleştiyse veya ani idrar/gaita kaçırma şikayetiniz başladıysa acilen ameliyat olmanız gerekebilir; vakit kaybetmeden doktora başvurmalısınız.',
    postTreatment: 'Tedavi sonrasında core (karın ve bel) kaslarının güçlendirilmesi hayati önem taşır. Ameliyat olan hastalar ilk 4 hafta ağır kaldırmaktan ve ani hareketlerden kaçınmalıdır. Kilo kontrolü, bel sağlığının korunması için en önemli uzun vadeli yatırımdır.',
    lifestyle: 'Yerden bir şey alırken asla belinizi bükerek eğilmeyin; dizlerinizi bükerek çömelin. Uzun süre oturarak çalışıyorsanız her saat başı kalkıp esneme egzersizleri yapın. Sigara içmek disklerin beslenmesini engellediği için kesinlikle bırakılmalıdır.',
    faq: [
      { question: 'Bel fıtığı patlaması kendi kendine iyileşebilir mi?', answer: 'Evet, fıtıklaşan kısım (özellikle patlamış fıtıklarda) vücut tarafından "yabancı doku" olarak algılanır ve makrofaj adı verilen savunma hücreleri tarafından zamanla eritilebilir (rezorpsiyon).' },
      { question: 'Bel fıtığı için sert yerde yatmak doğru mudur?', answer: 'Hayır, tahta veya beton gibi aşırı sert zeminler omurganın doğal kıvrımlarını desteklemediği için bel ağrısını artırır. En ideal yatak orta sertlikteki ortopedik yataklardır.' }
    ]
  },
  'omurga-kaymasi-spondilolistezis-ve-tedavi-yollari': {
    title: 'Omurga Kayması (Spondilolistezis) ve Tedavi Yolları',
    definition: '<strong>Omurga kayması (Spondilolistezis)</strong>, bir omur kemiğinin (vertebranın), altındaki diğer omur kemiğinin üzerinde öne veya arkaya doğru kayarak omurga dizilimini ve dengesini bozması durumudur. Bu patoloji, hem omurgada ciddi mekanik instabiliteye ve şiddetli bel ağrılarına yol açar, hem de kayma bölgesinden geçen sinir köklerini gererek veya omurilik kanalını daraltarak bacaklarda uyuşma, ağrı ve güç kayıplarına sebebiyet verir.',
    mechanism: 'Omurgayı bir arada tutan faset eklemler ve bağlar, dejenerasyon (yaşlanma), doğuştan gelen kemik zayıflıkları (pars interarticularis kırığı - spondilolizis) veya travmalar sonucu gevşer. Destek mekanizması çöktüğünde üstteki omur, alttakinin üzerinde öne doğru kayar. Kayma miktarına göre Grade I (%25\'e kadar), II (%50\'ye kadar), III (%75\'e kadar) ve IV (tam kayma) olarak sınıflandırılır. Bu mekanik yer değiştirme, sinir köklerinin geçtiği foramenleri daraltarak kronik sinir basısı (radikülopati) oluşturur.',
    clinicalProcess: 'Omurga kayması şüphesinde tanı, hastanın ayakta durmakla ve geriye doğru eğilmekle artan şiddetli bel ağrısı şikayetleri üzerine konur. Muayenede hastanın bel çukurunda bir basamaklaşma (step-off bulgusu) hissedilebilir. Kesin tanı için ayakta dinamik (öne-arkaya eğilerek) röntgen grafileri çekilir. Bu grafiler kaymanın hareketli (instabil) olup olmadığını gösterir. MRG ile sinir sıkışmaları değerlendirilir. Grade I ve hafif Grade II vakalarda fizik tedavi uygulanırken, instabil ve ileri derece kaymalarda cerrahi stabilizasyon (platin ameliyatı) yapılır.',
    symptoms: [
      '<strong>Geriye Eğilmekle Artan Bel Ağrısı:</strong> Omurganın arkaya bükülmesiyle kayan kemiğin sinirleri daha fazla sıkıştırması sonucu oluşan keskin bel ağrısı.',
      '<strong>Ördekvari Yürüyüş:</strong> Kayan omurun leğen kemiği açısını değiştirmesi nedeniyle uyluk arka kaslarında (hamstring) kısalma ve dengesiz, sallantılı yürüme.',
      '<strong>Geçmeyen Bacak Krampları ve Siyatik:</strong> Kayma bölgesindeki sinirlerin sürekli gerilmesine bağlı olarak bacaklarda uyuşma, yanma ve kramplar.'
    ],
    diagnosis: [
      '<strong>Ayakta Dinamik Lomber Röntgen:</strong> Hastanın öne ve arkaya eğilmesiyle çekilen grafiler; kaymanın derecesini ve hareketliliğini saptayan en önemli tetkik.',
      '<strong>Lomber BT ve MRG:</strong> Kayan kemiklerin milimetrik ölçümü, kemik köprülerin kırık kontrolü (spondilolizis) ve sinir sıkışmalarının görüntülenmesi.'
    ],
    treatments: [
      '<strong>Core ve Karın Kaslarını Güçlendirme:</strong> Omurgayı çevreleyen kasları çelik bir korse haline getirerek kaymayı durdurmayı hedefleyen özel klinik pilates egzersizleri.',
      '<strong>Lomber Korse Kullanımı:</strong> Akut ağrılı dönemlerde omurganın hareketlerini kısıtlayarak ağrıyı azaltmak amacıyla kısa süreli korse desteği.',
      '<strong>Posterior Enstrümantasyon ve Füzyon (Platin):</strong> Ameliyatla kayan kemiğin yerine çekilmesi ve titanyum vidalarla birbirine sabitlenmesi.'
    ],
    whenToSeeDoctor: 'Bel ağrınız nedeniyle 10-15 dakikadan fazla ayakta kalamıyorsanız, bacaklarınızda sürekli bir uyuşukluk yerleştiyse veya belinizde elle dokunulduğunda hissedilen belirgin bir çöküntü/basamaklaşma varsa mutlaka beyin ve omurga cerrahisine başvurmalısınız.',
    postTreatment: 'Platin ameliyatı olan hastalar ilk birkaç ay boyunca eğilmekten ve ağır kaldırmaktan kaçınmalıdır. Kemik kaynaması (füzyon) tamamlanana kadar (yaklaşık 3-6 ay) koruyucu korse kullanımı önerilebilir. Kemik kaynaması doğrulandıktan sonra hastalar normal fiziksel aktivitelerine dönebilirler.',
    lifestyle: 'İdeal kilonuzu koruyarak bel omurlarına binen yükü azaltın. Ağır nesneleri kaldırırken belinizi asla bükmeyin. Omurgaya binen şok darbelerini azaltmak için yumuşak tabanlı, ortopedik ayakkabılar tercih edin. Sigara içmeyin; çünkü sigara kemik kaynamasını (füzyon başarısını) doğrudan engeller.',
    faq: [
      { question: 'Ameliyatta takılan platinler vücutta alerji yapar mı ya da kapılarda öter mi?', answer: 'Ameliyatta takılan vidalar biyoyumlu saf titanyum alaşımlarından yapıldığı için vücutta alerji veya reddedilme riski yoktur ve havalimanı güvenlik kapılarında alarm ötmesine neden olmaz.' },
      { question: 'Korse takmak omurga kaymasını düzeltir mi?', answer: 'Korse kaymayı fiziksel olarak düzeltmez; sadece bel hareketlerini kısıtlayarak ağrıyı hafifletir. Korsenin uzun süreli kullanımı bel kaslarını zayıflatacağı için 3 haftadan fazla takılması önerilmez.' }
    ]
  },
  'beyin-kanamalari-nedenleri-ve-acil-mudahale': {
    title: 'Beyin Kanamaları Nedenleri ve Acil Müdahale',
    definition: '<strong>Beyin kanaması</strong>, kafa içindeki atardamar veya toplardamarların duvar bütünlüğünün bozularak kanın beyin parankimi içine, beyin zarları arasına veya beyin odacıklarına (ventriküllere) sızması durumudur. Beyin kanaması, nörolojik fonksiyonların hızla yitirilmesine ve kafa içi basınç artışına bağlı olarak dakikalar içinde ölümcül sonuçlar doğurabilen, tıp literatüründeki en yüksek aciliyete sahip vasküler felaketlerden biridir.',
    mechanism: 'Kafatasının içi sabit bir hacme sahiptir. Damar yırtılıp kan sızmaya başladığında kafa içi basınç (KİB) hızla yükselir. Bu durum normal beyin dokusunu sıkıştırarak kan akımını durdurur ve beyinde yaygın iskemi (oksijensiz kalma) başlatır. Sıkışan beyin dokusu aşağıya doğru itilerek beyin sapındaki solunum ve dolaşım merkezlerini ezer (herniasyon). Ayrıca, dökülen kan hücrelerinin yıkımı sonucu ortaya çıkan serbest demir ve kimyasal maddeler, çevre beyin dokusunda toksik etki yaratarak vazojenik ödemi ve hücre ölümünü artırır.',
    clinicalProcess: 'Beyin kanaması şüphesi olan bir hastada süreç saniyelerle yarışır. Hasta acil servise ulaştığı anda hayati fonksiyonları (solunum, tansiyon, nabız) stabilize edilir. Bilinç seviyesi Glasgow Koma Skalası (GKS) ile ölçülür. Vakit kaybetmeden kontrastsız Beyin BT çekilerek kanamanın türü (epidural, subdural, intraserebral, subaraknoid) saptanır. Kanamanın boyutu ve yarattığı baskı cerrahi sınırı aşmışsa hasta acilen ameliyathaneye alınarak hematom tahliye edilir. Kanamaya neden olan anevrizma gibi bir damar anomalisi varsa kliplenir veya endovasküler yöntemlerle kapatılır.',
    symptoms: [
      '<strong>Yıldırım Çarpması Baş Ağrısı:</strong> Özellikle subaraknoid (zar altı) kanamalarda görülen, hastanın ömründe hissettiği en şiddetli ve ani başlayan zonklayıcı baş ağrısı.',
      '<strong>Tek Taraflı Felç ve Konuşma Kaybı:</strong> Vücudun sağ veya sol yarısında ani gelişen tam güçsüzlük, yüz felci, peltek konuşma veya hiç konuşamama.',
      '<strong>Bulantı Olmaksızın Kusma ve Bilinç Bozukluğu:</strong> Kafa içi basıncın artmasıyla fışkırır tarzda kusma, ardından hastanın uykuya eğilimi, şuur bulanıklığı veya koma haline girmesi.'
    ],
    diagnosis: [
      '<strong>Kontrastsız Acil Beyin BT:</strong> Kafa içi kanamaları saniyeler içinde gösteren, acil şartlarda en hızlı ve en güvenilir tanı yöntemi.',
      '<strong>Beyin BT Anjiyografi ve DSA:</strong> Kanamaya yol açan damar genişlemelerini (anevrizma), damar yumaklarını (AVM) veya tıkanıklıkları saptayan damar haritalama yöntemleri.'
    ],
    treatments: [
      '<strong>Acil Hematom Tahliyesi:</strong> Kafatası kemiği açılarak (kraniyotomi) beyne baskı yapan kan pıhtısının temizlenmesi.',
      '<strong>Dekompresif Kraniektomi (Kemik Çıkarma):</strong> Beyindeki aşırı ödem ve şişmeyi rahatlatmak için kafatası kemiğinin geçici olarak çıkarılması.',
      '<strong>Anevrizma Kliplenmesi / Mikro-Embolizasyon:</strong> Kanayan damarın mikroskop altında titanyum klipsle kapatılması veya kasıktan girilerek coilleme (tıkaç) yapılması.'
    ],
    whenToSeeDoctor: 'Yakınınızda veya kendinizde ani başlayan şiddetli baş ağrısı, konuşma zorluğu, ağızda eğilme, tek kolda güç kaybı veya dengesizlik fark ettiğiniz anda saniye kaybetmeden 112 Acil Servisi aramalı ve hastanın en yakın tam teşekküllü hastaneye naklini sağlamalısınız.',
    postTreatment: 'Ameliyat sonrası dönemde hasta mutlaka 3. düzey yoğun bakımda yakından izlenir. Kan basıncı milimetrik düzeyde kontrol edilir. İkincil damar spazmlarını önlemek için ilaç tedavileri uygulanır. Durumu stabilize olan hastalarda felç durumunun düzelmesi için çok erken dönemde fizik tedavi ve yatak içi egzersizler başlatılır.',
    lifestyle: 'Tansiyonunuzu her gün düzenli ölçün ve tansiyon ilaçlarınızı aksatmayın. Sigara, alkol ve aşırı tuz tüketimi damar yapısını bozarak kanama riskini katladığı için tamamen hayatınızdan çıkarılmalıdır. Düzenli hafif yürüyüşler yapın ve stresten kaçının.',
    faq: [
      { question: 'Beyin kanaması geçiren bir kişi tamamen eski haline dönebilir mi?', answer: 'Evet, özellikle hızlı müdahale edilen, kanama boyutu çok büyük olmayan ve kritik beyin merkezlerini doğrudan yıkmayan kanamalarda, başarılı ameliyat ve yoğun fizik tedaviyle hastalar tamamen eski normal hayatlarına dönebilirler.' },
      { question: 'Beyin kanaması tekrarlar mı?', answer: 'Özellikle yüksek tansiyonu kontrol altına alınmayan hastalarda veya tedavisi yapılmamış anevrizması olanlarda beyin kanamasının tekrarlama riski mevcuttur. Bu nedenle tansiyon kontrolü ve damar takipleri çok sıkı yapılmalıdır.' }
    ]
  },
  'omurga-kiriklari-ve-omurilik-yaralanmalari': {
    title: 'Omurga Kırıkları ve Omurilik Yaralanmaları',
    definition: '<strong>Omurga kırıkları ve omurilik yaralanmaları</strong>, yüksek enerjili travmalar (trafik kazaları, yüksekten düşmeler, spor kazaları vb.) veya kemik yapısını zayıflatan hastalıklar (osteoporoz, tümörler) nedeniyle omurga kemiklerinin bütünlüğünün bozulması ve bunun sonucunda omurga kanalından geçen omuriliğin sıkışması, ezilmesi veya tam kesiye uğraması durumudur. Bu yaralanmalar, kalıcı duyusal ve motor felç durumlarına, solunum yetmezliğine ve ömür boyu sürebilecek nörolojik kısıtlılıklara yol açabilen son derece ciddi travmatik tablolardır.',
    mechanism: 'Travmanın şiddetiyle omur gövdeleri ezilebilir (çökme kırığı), parçalanarak omurilik kanalına doğru patlayabilir (patlama kırığı) ya da omurlar arasındaki bağlar yırtılarak omurlar yerinden çıkabilir (kırıklı çıkık). Kemik fragmanları veya disk materyalleri doğrudan omurilik dokusuna saplanarak mekanik hasar oluşturur. Bu birincil hasarı takip eden saatlerde ise omurilikte ödem, mikro-hemorajiler ve iskemi ile seyreden ikincil hasar kaskadı başlar. Kırığın seviyesi ne kadar yukarıda (örneğin boyunda) ise felcin ve hayati riskin boyutu o kadar büyüktür.',
    clinicalProcess: 'Travma geçiren hastaya olay yerinde ilk müdahale yapılırken tüm omurga (boyun, sırt, bel) özel sedye ve boyunluklarla tam olarak sabitlenir. Acil servise ulaşıldığında nörolojik muayene ile duyu ve motor seviyesi (ASIA skorlaması) belirlenir. Acil 3D BT ve MRG çekilerek kırıkların mekanik stabilitesi ve omurilikteki hasar derecesi saptanır. Stabil olmayan kırıklarda veya omurilik üzerinde aktif bası olan durumlarda hasta acilen ameliyata alınarak kemikler vidalarla sabitlenir ve sinirler rahatlatılır.',
    symptoms: [
      '<strong>Travma Sonrası Şiddetli Lokal Ağrı:</strong> Kırığın olduğu omurga bölgesinde başı veya gövdeyi hareket ettirmekle ortaya çıkan, bıçak saplanır tarzda şiddetli ağrı.',
      '<strong>Ani Gelişen Duyu ve Motor Felci:</strong> Yaralanma seviyesinin altındaki tüm bölgelerde (kollar, bacaklar veya tüm vücut) ani başlayan hissizlik ve hareket ettirememe durumu.',
      '<strong>Reflekslerin Kaybolması ve Spinal Şok:</strong> Yaralanmanın ilk saatlerinde tansiyon düşmesi, nabız yavaşlaması ve kasların tamamen gevşek (flask) hale gelmesi.'
    ],
    diagnosis: [
      '<strong>3 Boyutlu Spinal BT:</strong> Kırık hatlarını, parçalanan kemiklerin kanal içine sapan uçlarını ve omurganın kemik anatomisini saniyeler içinde gösteren acil tetkik.',
      '<strong>Spinal Kord MRG:</strong> Omurilik dokusundaki ödemi, ezilmeyi, kanamayı ve omurgayı ayakta tutan bağ dokularının bütünlüğünü gösteren en hassas tarama.'
    ],
    treatments: [
      '<strong>Posterior Stabilizasyon (Platin Ameliyatı):</strong> Kırık bölgesinin üstündeki ve altındaki sağlam omurlara titanyum vidalar yerleştirilip çubuklarla kırık hattının sabitlenmesi.',
      '<strong>Omurilik Dekompresyonu (Laminektomi):</strong> Omuriliğe arkadan baskı yapan kemiklerin ve dokuların mikroskop altında temizlenmesi.',
      '<strong>Kyphoplasty / Vertebroplasty:</strong> Çökme kırığı olan osteoporotik hastalarda, kapalı yöntemle kırık omur içine girilerek balonla şişirilmesi ve kemik çimentosu (akrilat) sıkılarak dondurulması.'
    ],
    whenToSeeDoctor: 'Yüksekten düşme, trafik kazası veya sığ suya dalma sonrasında sırtınızda veya boynunuzda ani şiddetli ağrı varsa, bacaklarınızda veya kollarınızda uyuşma, karıncalanma ya da hareket ettirememe hissettiğiniz anda derhal 112 aranmalı ve hasta hiç hareket ettirilmeden acil servise nakledilmelidir.',
    postTreatment: 'Ameliyattan sonra hastanın nörolojik takibi yoğun bakımda sürdürülür. Kemik kaynaması sürecinde özel korse veya boyunluklar kullandırılır. Yatak yaralarını önlemek için hasta sık sık çevrilir. İyileşmeyi maksimize etmek için ameliyattan sonraki ilk günlerden itibaren yatak içi pasif hareketlerle başlayan çok yoğun bir nöro-rehabilitasyon süreci planlanır.',
    lifestyle: 'Kemik kalitesini ve iyileşmeyi artırmak için kalsiyum, magnezyum ve D vitamini takviyeleri alınmalıdır. Sigara kemik kaynamasını ve hücre yenilenmesini ciddi oranda durdurduğu için kesinlikle bırakılmalıdır. Doktorun önerdiği fizik tedavi seansları aksatılmadan yıllarca sürdürülebilir.',
    faq: [
      { question: 'Omurilik yaralanmasından sonra felç kalan bir hasta tekrar yürüyebilir mi?', answer: 'Yaralanmanın "tam kesi" (complete) mi yoksa "kısmi hasar" (incomplete) mi olduğu çok önemlidir. Kısmi hasarlarda erken ameliyat ve azimli, uzun süreli fizik tedaviyle hastaların çok önemli bir kısmı yeniden yürüyebilir hale gelebilir.' },
      { question: 'Kyphoplasty (kemik çimentosu) ameliyatı sonrası hasta ne zaman ayağa kalkar?', answer: 'Kyphoplasty lokal anestezi altında yapılan 30 dakikalık kapalı bir işlemdir. Hasta işlemden 2-3 saat sonra sırt ağrısından tamamen kurtulmuş olarak yürüyerek evine dönebilir.' }
    ]
  },
  'omurga-tumorleri': {
    title: 'Omurga Tümörleri',
    definition: '<strong>Omurga tümörleri</strong>, omurga kemiklerini (vertebra), omurlar arasındaki diskleri veya omurgayı çevreleyen yumuşak dokuları tutan tüm iyi ve kötü huylu tümöral kitlelerdir. Omurga tümörleri birincil (primer) kemik tümörleri (osteosarkom vb.) olabileceği gibi, çok daha sıklıkla vücudun başka bir organındaki (akciğer, meme, prostat, böbrek, tiroid vb.) kanserin kan yoluyla omurga kemiğine sıçraması sonucu oluşan metastatik tümörlerdir. Omurga tümörleri hem kemiği eriterek omurgada çökmelere ve kırıklara yol açar, hem de spinal kanala taşarak omurilik felcine sebep olur.',
    mechanism: 'Kanser hücreleri kan akımı yoluyla omur gövdesinin kırmızı kemik iliğine yerleşir. Burada çoğalan tümör hücreleri, kemiği eriten (osteolitik) veya anormal kemik üreten (osteoblastik) aktivite gösterir. Kemik eridikçe omurganın yük taşıma kapasitesi çöker ve "patolojik kırıklar" gelişir. Kırılan kemikler veya büyüyen tümör dokusu arkaya doğru taşarak spinal kanaldaki omuriliği sıkıştırır. Bu durum, omurilik kan akışını bozarak iskemik felç tablosunu (metastatik epidural spinal kord basısı) meydana getirir.',
    clinicalProcess: 'Tanı süreci, kanser öyküsü olan veya olmayan bir hastanın geçmeyen, geceleri artan sırt ve bel ağrıları şikayetleriyle başlar. Fizik muayenede omurga üzerine vurulduğunda (perküsyon) lokalize şiddetli ağrı saptanır. Kontrastlı Tüm Omurga MRG ile tüm omurların tutulumu incelenir. BT ile kemik yıkım derecesi değerlendirilir. Kesin tanı için BT eşliğinde kemik biyopsisi yapılır. Tedavi planı; tümörün cinsine, omurganın stabilitesine ve nörolojik duruma göre cerrahi, radyoterapi (SBRT) ve kemoterapi kombinasyonu olarak belirlenir.',
    symptoms: [
      '<strong>İlaçla Geçmeyen Geceleri Artan Sırt Ağrısı:</strong> Fıtık ağrılarından farklı olarak, istirahat halindeyken veya gece yatakta dönmekle artan, inatçı, lokalize sırt ve bel ağrıları.',
      '<strong>Omurgada Mekanik Stabilite Kaybı:</strong> Ayağa kalkmakla veya yürümekle sırtta ani bir kırılma, çökme hissi ve ayakta duramama durumu.',
      '<strong>İlerleyici Nörolojik Kayıplar:</strong> Tümörün sinirlere baskı yapmasıyla bacaklarda uyuşma, idrar kaçırma ve yürüme mesafesinde hızlı kısalma.'
    ],
    diagnosis: [
      '<strong>Kontrastlı Tüm Omurga MRG:</strong> Tüm omurga kolonunu tarayarak hangi omurlarda kaç adet tümör odağı olduğunu ve omurilik basısını gösteren en hassas tetkik.',
      '<strong>PET-CT ve BT Eşliğinde İğne Biyopsisi:</strong> Tümörün kaynağını saptamak ve patolojik alt türünü belirleyerek doğru tedaviyi seçmek için yapılan işlemler.'
    ],
    treatments: [
      '<strong>Spinal Dekompresyon ve Tümör Rezeksiyonu:</strong> Omuriliği sıkıştıran tümör dokusunun temizlenmesi operasyonu.',
      '<strong>Omurga Enstrümantasyonu (Stabilizasyon):</strong> Tümörün erittiği omurga kemiklerini desteklemek ve kırıkları önlemek amacıyla vidalarla omurganın sabitlenmesi.',
      '<strong>Stereotaktik Beden Radyoterapisi (SBRT):</strong> Nokta atışı yüksek doz radyasyonla kemik içindeki tümör hücrelerinin yok edilmesi tedavisi.'
    ],
    whenToSeeDoctor: 'Özellikle bilinen bir kanser öykünüz varsa (meme, akciğer, prostat vb.) ve sırtınızda/belinizde son zamanlarda başlayan ve ağrı kesicilerle geçmeyen inatçı ağrılarınız varsa hiç vakit kaybetmeden spinal MRG çektirmelisiniz.',
    postTreatment: 'Tedavi sonrasında hastalar onkoloji uzmanlarıyla birlikte takip edilir. Kemik kalitesini artırıcı ilaçlar (zoledronik asit vb.) başlanır. Ameliyat edilen hastalara omurgayı korumak için özel çelik destekli korseler kullandırılır. Nörolojik defisiti olan hastalar hemen fizik tedaviye alınarak kas güçleri korunmaya çalışılır.',
    lifestyle: 'Kemikleri güçlendirmek için kalsiyum ve D vitamini seviyeleri optimal tutulmalıdır. Ağır yük taşımaktan, ani dönme ve bükülme hareketlerinden kaçınılmalıdır. Anti-enflamatuar beslenme modeliyle vücudun genel bağışıklık sistemi desteklenmelidir.',
    faq: [
      { question: 'Omurgada tümör olması hastanın felç kalacağı anlamına mı gelir?', answer: 'Kesinlikle hayır. Erken dönemde saptanan omurga tümörleri, spinal kord basısı yapmadan önce yapılan nokta atışı radyoterapiler (SBRT) veya sabitleme ameliyatları sayesinde felç riski tamamen önlenebilir.' },
      { question: 'Omurga metastazlarında ameliyat yaşam süresini uzatır mı?', answer: 'Ameliyatın temel amacı hastanın felç kalmasını önlemek, şiddetli mekanik ağrısını kesmek ve hastanın kendi başına yürüyebilmesini sağlamaktır. Bu durum hastanın genel yaşam kalitesini ve onkolojik tedavilere uyumunu artırarak dolaylı olarak ömrü uzatır.' }
    ]
  },
  'yaslanan-omurga-sorunlari-ve-dejeneratif-hastaliklar': {
    title: 'Yaşlanan Omurga Sorunları ve Dejeneratif Hastalıklar',
    definition: '<strong>Yaşlanan omurga sorunları ve dejeneratif hastalıklar</strong>, ömür boyu süren mekanik yüklenmeler, yer çekimi ve yaşlanmanın biyolojik etkileri sonucunda omurga kemikleri, diskleri, eklemleri ve bağlarında meydana gelen ilerleyici aşınma, yıpranma ve yapısal bozulma süreçleridir. Bu süreçte disklerin su kaybetmesi, faset eklemlerin kireçlenmesi (osteoartrit), bağların kalınlaşması ve kemik erimesi (osteoporoz) gibi patolojiler bir araya gelerek kanal darlığına, fıtıklara, omurga eğriliklerine (geriatrik skolyoz) ve şiddetli kronik ağrılara yol açar.',
    mechanism: 'Hücresel düzeyde intervertebral disklerin içindeki proteoglikan ve su miktarı yaşla birlikte azalır, diskler esnekliğini kaybederek çöker. Disk çöktükçe omurga yükü arkadaki faset eklemlere biner. Faset eklemler aşırı yükten dolayı kireçlenir ve büyür. Omurganın stabilitesini korumaya çalışan sarı bağ (ligamentum flavum) hipertrofiye uğrar (kalınlaşır). Tüm bu kireçlenmeler ve kalınlaşmalar omurilik kanalını daraltarak sinirleri sıkıştırır. Kemik erimesi ise omurlarda mikro-kırıklara yol açarak omurganın öne doğru bükülmesine (senil kifoz) sebep olur.',
    clinicalProcess: 'Yaşlı hastalarda tanı süreci çok yönlüdür. Hastanın ağrısız yürüme mesafesi, dengesi, osteoporoz derecesi ve ek sistemik hastalıkları (şeker, tansiyon, kalp) titizlikle değerlendirilir. Dinamik röntgenler ile omurga dizilimi ve kaymalar saptanır. MRG ile çok seviyeli kanal daralmaları haritalandırılır. Tedavide öncelik, hastanın genel sağlık durumunu riske atmayacak ameliyatsız yöntemlerdir (fizik tedavi, faset enjeksiyonları, radyofrekans tedavileri). Ancak yürüme mesafesi aşırı kısıtlanan ve felç riski olan hastalarda mikrocerrahi dekompresyon planlanır.',
    symptoms: [
      '<strong>Yol Kenarına Oturma İhtiyacı (Claudicatio):</strong> Kısa bir mesafe yürüdükten sonra bacaklarda uyuşma, kasılma ve kuvvetsizlik olması; ancak oturup öne doğru eğilince (vitrin bakma pozisyonu) rahatlama durumu.',
      '<strong>Kamburlaşma ve Boy Kısalması:</strong> Kemik erimesi ve çöken diskler nedeniyle omurganın öne bükülmesi, boyun birkaç santim kısalması ve sırtta belirgin kavis oluşması.',
      '<strong>Sabahları Ağır Tutukluk:</strong> Yataktan kalkarken belde ve boyunda hissedilen, hareket ettikçe yarım saat içinde hafifleyen şiddetli paslanma/tutukluk hissi.'
    ],
    diagnosis: [
      '<strong>DEXA (Kemik Yoğunluğu Ölçümü):</strong> Osteoporoz derecesini belirleyerek kırık risklerini saptayan temel kemik taraması.',
      '<strong>Tüm Omurga Röntgen ve MRG Entegrasyonu:</strong> Omurganın genel sagittal dengesini (dizilimini) ve sinir kanallarındaki daralmaları gösteren tetkikler.'
    ],
    treatments: [
      '<strong>Medikal ve Rejeneratif Tedaviler:</strong> Ağrılı faset eklemlere yapılan ozon enjeksiyonları, proloterapi ve radyofrekans ile ağrı sinirlerinin yakılması.',
      '<strong>Minimal İnvaziv Cerrahi (Mikro-Dekompresyon):</strong> Yaşlı hastanın anatomisine zarar vermeden, küçük kesilerden girilerek sadece dar kanalların mikroskop altında genişletilmesi.',
      '<strong>Osteoporoz Tedavisi:</strong> Kemik yıkımını durduran ve yapımını artıran ilaçlar, kalsiyum ve aktif D vitamini takviyeleri.'
    ],
    whenToSeeDoctor: 'Yürürken bacaklarınızda derman kalmıyorsa ve her 50-100 metrede bir durup dinlenmek zorunda kalıyorsanız, bacaklarınızda gece uykudan uyandıran şiddetli kramplar oluyorsa veya hafif bir düşme sonrasında sırtınızda geçmeyen keskin bir ağrı başladıysa mutlaka doktora başvurmalısınız.',
    postTreatment: 'Tedavi sonrasında yaşlı hastaların yatak istirahatinden kaçınması ve hızlıca mobilize olması (hareketlenmesi) istenir; çünkü uzun süreli yatak istirahatı yaşlılarda kas kaybını ve osteoporozu hızlandırır. Kasları korumak için hafif yürüyüşler ve su içi egzersizler (hidroterapi) önerilir.',
    lifestyle: 'Evinizde düşme riskini azaltacak düzenlemeler yapın (halıları sabitleyin, banyoya tutamaklar koyun, eşiklerin yüksekliğini azaltın). Düzenli olarak güneş ışığı alın ve kemik dostu beslenin. Dengenizi korumak ve omurgaya binen yükü azaltmak için yürürken baston veya yürüteç (walker) kullanmaktan çekinmeyin.',
    faq: [
      { question: '75 yaşın üzerindeki bir hastanın omurga ameliyatı olması tehlikeli midir?', answer: 'Günümüzde gelişmiş anestezi teknikleri ve minimal invaziv (küçük kesili) cerrahi yöntemler sayesinde, ileri yaşlardaki hastalarda da sadece dar kanalları genişleten ameliyatlar son derece güvenle ve düşük riskle gerçekleştirilebilmektedir.' },
      { question: 'Yaşlanan omurgadaki kireçlenmeler tamamen temizlenebilir mi?', answer: 'Kireçlenmeler yaşlanmanın doğal bir parçasıdır ve hepsini temizlemek hem imkansızdır hem de omurganın dengesini bozar. Ameliyattaki amaç sadece sinirlere doğrudan baskı yapan kireçlenmeleri mikroskop altında temizlemektir.' }
    ]
  },
  'omurga-ve-omurilik-sagligi-hastaliklari-ve-cerrahisi': {
    title: 'Omurga ve Omurilik Sağlığı, Hastalıkları ve Cerrahisi',
    definition: '<strong>Omurga ve omurilik sağlığı, hastalıkları ve cerrahisi</strong>, insan iskeletinin ana taşıyıcı kolonu olan omurganın ve onun içinde korunan, beynin tüm emirlerini vücuda ileten omurilik sinir ağının her türlü hastalığını, koruyucu hekimliğini, biomekaniğini ve cerrahi tedavilerini inceleyen geniş kapsamlı bir tıp disiplinidir. Omurga sağlığı, sadece ağrısız bir yaşam için değil, aynı zamanda iç organlarımızın ve tüm kas-iskelet sistemimizin uyum içinde çalışması için de beden sağlığımızın merkezini oluşturur.',
    mechanism: 'Omurga; 33 adet omur kemiği, diskler, faset eklemleri, bağlar ve güçlü kas gruplarından oluşan, hem başın ve gövdenin yükünü taşıyan hem de her yöne hareket etmemizi sağlayan biyomekanik bir sistemdir. Bu sistemin içindeki spinal kanalda yer alan omurilik ise merkezi sinir sisteminin ana otobanıdır. Postür bozuklukları, kas güçsüzlükleri, obezite veya sigara gibi faktörler bu hassas biyomekanik dengeyi bozar. Disklerin beslenmesi bozulduğunda fıtıklar gelişir, eklemler yıprandığında kireçlenmeler ve kaymalar oluşur; tüm bunlar omurilik ve sinirleri sıkıştırarak nörolojik kayıplara yol açar.',
    clinicalProcess: 'Klinik süreç, hastanın duruşunun (postürünün), yürüyüşünün, kas güçlerinin, reflekslerinin ve omurga hareket açıklığının (ROM) detaylı muayenesiyle başlar. Görüntüleme yöntemleri olarak Röntgen, BT ve MRG kullanılarak omurganın hem kemik yapısı hem de yumuşak doku/sinir ilişkisi 3 boyutlu olarak analiz edilir. Tedavi yaklaşımında her zaman "en basitten karmaşığa" ilkesi benimsenir. Koruyucu egzersizler, kilo kontrolü, fizik tedavi ve enjeksiyonlar ilk adımlardır. Nörolojik kayıplar (felç riskleri) veya düzeltilemeyen mekanik instabiliteler (kaymalar, kırıklar) varlığında ise mikrocerrahi ve enstrümantasyon ameliyatları gerçekleştirilir.',
    symptoms: [
      '<strong>Kronik Bel ve Boyun Ağrıları:</strong> Günlük yaşam kalitesini düşüren, duruş bozukluğuna bağlı kas spazmları ve eklem kireçlenmeleriyle seyreden ağrılar.',
      '<strong>Kollara ve Bacaklara Yayılan Ağrılar:</strong> Omurilikten çıkan sinir köklerinin fıtıklar veya kireçlenmeler nedeniyle sıkışması sonucu oluşan radiküler ağrılar.',
      '<strong>Postür ve Denge Bozuklukları:</strong> Omurga diziliminin bozulmasıyla ortaya çıkan kamburluk, yana doğru eğilme (skolyoz) veya yürürken dengesizlik.'
    ],
    diagnosis: [
      '<strong>Multi-parametrik Omurga MRG:</strong> Disklerin dehidratasyon derecesini, fıtıkları ve sinir kökü sıkışmalarını en hassas gösteren tanı aracı.',
      '<strong>Fonksiyonel ve Dinamik Röntgen Grafileri:</strong> Ayakta çekilen filmlerle omurganın genel dengesini, açılanmalarını ve hareket esnasındaki kaymalarını değerlendirme.'
    ],
    treatments: [
      '<strong>Koruyucu ve Önleyici Yaklaşımlar:</strong> Omurga biyomekaniğini düzelten özel fizyoterapi programları, core güçlendirme egzersizleri ve ergonomi eğitimleri.',
      '<strong>Girişimsel Ağrı Blokajları:</strong> Epidural enjeksiyonlar, faset eklem blokajları ve sinir uçlarına uygulanan radyofrekans denervasyon tedavileri.',
      '<strong>İleri Omurga Cerrahisi:</strong> Mikroskop altında yapılan fıtık temizleme, kanal genişletme ve omurga sabitleme (enstrümantasyon) ameliyatları.'
    ],
    whenToSeeDoctor: 'Sırtınızda, belinizde veya boynunuzda 6 haftadan uzun süren ve dinlenmekle geçmeyen ağrılarınız varsa, ağrı kollarınıza veya bacaklarınıza yayılıyorsa ya da ellerinizde/ayaklarınızda güçsüzlük hissettiyseniz vakit kaybetmeden bir uzmana başvurmalısınız.',
    postTreatment: 'İster cerrahi ister ameliyatsız tedavi olsun, omurga sağlığının korunması ömür boyu süren bir disiplindir. Tedavi sonrasında kas gücünün korunması için düzenli egzersiz yapılmalı, kilo kontrolüne dikkat edilmeli ve omurgayı koruyan ergonomik hareket alışkanlıkları günlük yaşam biçimi haline getirilmelidir.',
    lifestyle: 'Gün içinde mutlaka dik durmaya özen gösterin. Bilgisayar ve telefon kullanırken boynunuzu bükmeyin, göz hizasında tutun. Haftada en az 3-4 gün 30 dakikalık tempolu yürüyüşler yapın. Omurga disklerinin su içeriğini korumak için gün içinde bol su tüketin. Sigaradan kesinlikle uzak durun.',
    faq: [
      { question: 'Omurga sağlığı için en faydalı egzersizler hangileridir?', answer: 'Klinik pilates, yüzme ve düz zeminde yapılan tempolu yürüyüşler, omurgaya aşırı dikey yük bindirmeden bel, karın ve sırt kaslarını güçlendirdiği için en faydalı egzersizlerdir.' },
      { question: 'Her omurga ameliyatında platin takılması gerekir mi?', answer: 'Hayır, hastaların çoğunda (örneğin sadece fıtığı olanlarda) mikroskop altında yapılan mikrocerrahiler yeterlidir. Platin (enstrümantasyon) sadece omurgada kayma, parçalı kırık veya ileri derece duruş bozukluğu (skolyoz/kifoz) gibi instabilite durumlarında tercih edilir.' }
    ]
  }
};

import Navbar from "./components/navbar";
import Advantage from "./sections/advantage";
import Contact from "./sections/contact";
import Endocrina from "./sections/endocrina";
import Faq from "./sections/faq";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Instruction from "./sections/instruction";
import MyInfo from "./sections/my-info";
import Onlineonsultation from "./sections/online-consultation";
import Recommunded from "./sections/recommunded";
import Reviews from "./sections/reviews";
import Semptomp from "./sections/semptomp";
import Sertificate from "./sections/sertificate";
import Services from "./sections/services";
import Statisics from "./sections/statisics";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { orderPost } from "./utils/post";

type LangKeys = "uz" | "ru";

const App = () => {
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "ru");
  }

  const { i18n } = useTranslation();
  const seoText = {
    uz: {
      title:
        "Endokrinolog Larisa Yuryevna Kim | Integrativ va profilaktik tibbiyot mutaxassisi",
      description:
        "Endokrinolog Kim Larisa Yuryevna — integrativ va profilaktik tibbiyot bo‘yicha shifokor, nutrisiolog va IV-terapiya mutaxassisi. Prevent Age shifokorlari assotsiatsiyasi a’zosi. U nafaqat endokrin tizimning turli muammolarini aniqlash va davolashda, balki sog‘lom turmush tarzini shakllantirish, to‘g‘ri ovqatlanish va stressni boshqarish bo‘yicha maslahatlar berishda ham yetakchi mutaxassisdir. Har bir bemor uchun individual yondoshuvni qo‘llab-quvvatlaydi, shuningdek, zamonaviy tibbiyot va an’anaviy metodlarni uyg‘unlashtirib, sog‘likni yaxshilashga intiladi. Sog‘lig‘ingizni ishonchli qo‘llarga topshiring va bugundan boshlab yanada sog‘lom hayot kechirishni boshlang.",
      phone: "+(998) 90 941 85 49",
      address: "Toshkent, Kichik Xalqa yo'li 51",
    },
    ru: {
      title:
        "Эндокринолог Лариса Юрьевна Ким | Специалист по интегративной и профилактической медицине",
      description:
        "Эндокринолог Ким Лариса Юрьевна — врач интегративной и профилактической медицины, нутрициолог и специалист по IV-терапии. Член ассоциации врачей Prevent Age. Она не только занимается диагностикой и лечением различных эндокринных заболеваний, но также предоставляет консультации по формированию здорового образа жизни, правильному питанию и управлению стрессом. Ее подход к лечению включает индивидуальные рекомендации для каждого пациента, а также интеграцию современных медицинских технологий с традиционными методами. Доверьте свое здоровье надежным рукам и начните вести более здоровый образ жизни с сегодняшнего дня.",
      phone: "+(998) 90 941 85 49",
      address: "Ташкент, Кичик Халка йули 51",
    },
  };

  const today = new Date().toISOString().split("T")[0];
  const visitKey = `visited_${today}`;

  const visitSite = useMutation({
    mutationFn: orderPost.countControl, 
    onSuccess: () => {
      localStorage.setItem(visitKey, "true");
      console.log("true");
    },
    onError: (err) => {
      console.error("Xato yuz berdi:", err);
    },
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://mc.yandex.ru/metrika/tag.js";
    script.async = true;
    document.head.appendChild(script);

    const observer = new MutationObserver(() => {
      if (typeof window.ym === "function") {
        window.ym(99727476, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
        });
        observer.disconnect(); // Observerni to‘xtatish
      }
    });

    observer.observe(document.head, { childList: true, subtree: true });

    return () => {
      document.head.removeChild(script);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem(visitKey)) {
      return;
    }else{
      visitSite.mutate({ name: "WEB_SITE_VISIT" });
    }
  }, []);

useEffect(() => {
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N58S62CZ');`;
    document.head.appendChild(gtmScript);

    const gtmNoscript = document.createElement("noscript");
    gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N58S62CZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(gtmNoscript);

    return () => {
      // Cleanup
      document.head.removeChild(gtmScript);
      document.body.removeChild(gtmNoscript);
    };
  }, []);


  const currentLang: LangKeys = (i18n.language as LangKeys) || "uz"; // Fallback to "uz" if language is not set
  const currentSEO = seoText[currentLang] || seoText.uz;

  return (
    <BrowserRouter>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="phone" content={currentSEO.phone} />
        <meta name="address" content={currentSEO.address} />
        <meta name="yandex-verification" content="dc1a9192240cb928" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <>
        <Navbar />
        <Hero />
        <Statisics />
        <Recommunded />
        <Semptomp />
        <Instruction />
        <Services />
        {/* <MyInfo /> */}
        <Advantage />
        <Sertificate />

        <Reviews />
        <Instruction />
        <Faq />
        <Onlineonsultation />
        <Endocrina />

        {/* <Contact /> */}
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;

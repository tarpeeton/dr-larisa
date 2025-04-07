import { useTranslation } from "react-i18next";
import advantage from '@/assets/image/advantage.png'
import one from '@/assets/image/modal-icon.png'
import two from '@/assets/image/advantage_2.png'
import three from '@/assets/image/advantage_3.png'
import four from '@/assets/image/advantage_4.png'

const Advantage = () => {
  const {t} = useTranslation()
  const diateInfo = [
    {
        image: one,
        title: t('advantage_1')
    },
    {
        image: two,
        title: t('advantage_2')
    },
    {
        image: three,
        title: t('advantage_3')
    },
    {
        image: four,
        title: t('advantage_4')
    },
]
  return (
    <section className="mx-auto mt-10 md:mt-14 xl:mt-20">
        <div className="my-info-inner px-2 text-center">
            <h4 className="text-[#C9A690] font-bold text-[14px] md:text-[16px] text-center">{t('advantage_t')}</h4>
            <h2 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-3 md:mt-5 px-4">{t('advantage_d')}</h2>
            <div className=" bg-[#E4C3AD1A]">
                <div className="max-w-7xl mx-auto xl:my-20 mt-20 md:mt-32 flex flex-col xl:flex-row-reverse space-y-4 md:space-y-6 xl:space-y-0 justify-between items-center">
                    <img className="md:w-[519px] w-[450px]  absolute px-4 -mt-10 md:-mt-20" src={advantage} alt="advantage image" />
                    <span className="block xl:w-[519px] h-[250px] md:h-[320px]"></span>
                    <ul className="flex xl:flex-1 flex-col text-start md:space-y-0 w-full md:grid md:grid-cols-2 md:justify-items-center md:gap-5 py-2 space-y-3 px-4 md:p-4 xl:py-8 xl:p-6">
                        {diateInfo.map((el, i) => (
                            <li key={i} className="flex items-center gap-x-3 w-[328px] md:w-[322px] xl:w-[320px]">
                                <img src={el.image} alt="image" />
                                <h4 className="text-[14px] md:text-[16px] xl:text-[18px]">{el.title}</h4>
                            </li>
                        ))}
                    </ul>                
                </div>
            </div>
        </div>
    </section>
    );
};

export default Advantage;
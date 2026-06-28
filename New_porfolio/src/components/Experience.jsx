import { workExperiences } from '../constants/index.js';
import { styles } from '../styles'

const Experience = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`} id="work">
      <p className="head-text sm:ml-5 ml-2">My Work Experience</p>
      <div className="w-[70%] mx-auto text-white-600">
        <div className="work-container">

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className={`w-full h-full ${item.logoClass ?? ''}`} src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800 text-[18px]">{item.name}</p>
                    <p className="text-base mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <ul className="group-hover:text-white transition-all ease-in-out duration-500 list-disc ml-5 space-y-2">
                      {Array.isArray(item.title) ? item.title.map((point, i) => (
                        <li key={i} className="text-white-600 group-hover:text-white text-[16px] pl-1 tracking-wider">
                          {point}
                        </li>
                      )) : (
                        <p className="text-white-600 group-hover:text-white text-[16px]">{item.title}</p>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
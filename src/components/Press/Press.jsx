import NavBar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";

const Press = () => {
  const articles = [
    {
      id: 1,
      title: "More Than a Picture",
      description:
        "Khyron, a 22-year-old photographer from northern Louisiana, uses his passion for storytelling through photography to capture diverse cultures and people, inspired by his journey from a small-town upbringing to pursuing his dreams at MNSU.",
      image: "/articleimages/2020vision.webp",
      link: "https://2020vision.digital/2021/11/01/more-than-a-picture/",
    },
    {
      id: 2,
      title: "Khyron Winfield exhibit a vibrant display of humanity, talent",
      description:
        "Khyron Winfield, an emerging photographer from Louisiana, channels his passion for storytelling through vibrant, intimate images that celebrate diversity and urban culture, while navigating personal loss and newfound recognition as an artist.",
      image: "/articleimages/makatofreepress.webp",
      link: "https://www.mankatofreepress.com/news/lifestyles/khyron-winfield-exhibit-a-vibrant-display-of-humanity-talent/article_2414b9aa-7cb6-11ed-9bd8-57f0723b5809.html",
    },
  ];

  return (
    <div className="flex flex-col md:min-h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen w-full animate-fade-in-up">
        <div className="w-full max-w-4xl space-y-4 p-10 px-4 md:w-3/4 lg:w-2/3 p-6 gap-4 md:ml-44">
          {articles.map((article) => (
            <div className="border-solid border-2 border-zinc-50 p-1 w-full">
              <div
                key={article.id}
                className="flex flex-col md:flex-row w-full bg-white border-solid border-2 border-zinc-50"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full md:w-48 h-48 object-contain"
                />
                <div className="p-4 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {article.title}
                  </h2>
                  <p className="text-gray-700">{article.description}</p>
                  <button
                    className="w-full border-2 border-slate-800 my-2 px-4 py-2 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300"
                    onClick={() => window.open(article.link, "_blank")}
                  >
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Press;

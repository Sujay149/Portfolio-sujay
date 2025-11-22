import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { mockData } from '../mock';

const FeaturedArticle = ({ article }) => {
  return (
    <div className="col-span-12 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-2 border-black rounded-2xl overflow-hidden bg-white">
        {/* Image */}
        <div className="aspect-video lg:aspect-square overflow-hidden bg-gray-100">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Content */}
        <div className="p-8 lg:p-12 space-y-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold leading-tight hover:underline cursor-pointer">
            {article.title}
          </h3>
          
          <p className="text-base leading-relaxed">
            {article.description}
          </p>
          
          <a 
            href={article.link}
            className="inline-block text-base font-medium underline hover:no-underline transition-all"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

const ArticleCard = ({ article }) => {
  return (
    <div className="border-2 border-black rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold leading-tight hover:underline cursor-pointer">
          {article.title}
        </h3>
        
        <a 
          href={article.link}
          className="inline-block text-base font-medium underline hover:no-underline transition-all"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

const Articles = () => {
  return (
    <div className="min-h-screen pt-0">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-7xl font-bold">
            Words Can Change The World!
          </h1>
        </div>

        {/* Articles Layout */}
        <div className="grid grid-cols-12 gap-12">
          {/* Featured Article */}
          <FeaturedArticle article={mockData.articles[0]} />
          
          {/* Regular Articles */}
          {mockData.articles.slice(1).map((article) => (
            <div key={article.id} className="col-span-12 lg:col-span-6">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;

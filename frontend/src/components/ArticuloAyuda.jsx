import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../data/helpArticles.json';

export default function ArticuloAyuda() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <main className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600">Artículo no encontrado.</p>
          <Link to="/centro-ayuda" className="mt-4 inline-block text-primary font-semibold">← Volver al Centro de Ayuda</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 text-sm text-gray-500">
          <Link to="/centro-ayuda" className="hover:underline">Centro de Ayuda</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{article.category.replace('-', ' ')}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-[#0c274a]">{article.title}</h1>
        <p className="mt-2 text-gray-600">{article.excerpt}</p>
        <article className="mt-6 prose prose-blue max-w-none">
          <p>{article.content}</p>
        </article>
      </div>
    </main>
  );
}

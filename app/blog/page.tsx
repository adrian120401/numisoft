import CardBlog from '@/components/CardBlog';
import { articles } from '@/data/articles';
export default function About() {
    return (
        <div className="mt-24 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Blog</h2>
            {articles.length === 0 ? (
                <div className="h-[calc(100vh-25rem)]">
                <p>No hay articulos</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4">
                    {articles.map((article) => (
                        <CardBlog
                            key={article.id}
                            id={article.id}
                            title={article.title}
                            description={article.description}
                            image={article.image}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

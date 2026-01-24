import React from "react";
import { User, Clock, Image as ImageIcon } from "lucide-react";
import type { MediumPost } from "../../../services/types";
import {
  getCleanSnippet,
  extractReadTime,
  calculateReadTime,
  getFirstImage,
} from "../../../services/mediumService";

interface BlogCardProps {
  post: MediumPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const snippet = getCleanSnippet(post.description || post.content, 120);
  // Prefer extracted read time from Medium content, fallback only if absolutely necessary
  const readTime =
    extractReadTime(post.description || post.content) ||
    calculateReadTime(post.content);
  const category = post.categories.length > 0 ? post.categories[0] : "Article";

  const extractedImage = getFirstImage(post.description || post.content);
  const displayImage =
    post.thumbnail && !post.thumbnail.includes("stat?event=post.clientViewed")
      ? post.thumbnail
      : extractedImage;

  const formattedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-fade-in-up group overflow-hidden rounded-xl border border-border bg-card opacity-0 transition-all duration-300 hover:shadow-md block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
        {displayImage ? (
          <img
            src={displayImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-muted-foreground/40">
            <ImageIcon size={40} strokeWidth={1} />
            <span className="text-[10px] mt-2 uppercase tracking-widest font-medium">
              No image
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {formattedCategory}
        </span>
        <h3 className="mb-2 font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {snippet}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 font-medium">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {readTime}
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;

import BlogMain from "../../components/parts/Blog/BlogMain";
// import { CTA } from "../../components/parts/Blog/CTA";
import Starting from "../../components/ui/Starting";

export default function Blog() {
  return (
    <div>
      <Starting
        pageName="Our Blogs"
        srcImage="https://images.unsplash.com/photo-1638342863994-ae4eee256688?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <BlogMain />
      {/* <CTA /> */}
    </div>
  );
}

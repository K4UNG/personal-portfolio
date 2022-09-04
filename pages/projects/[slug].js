import Project from "../../components/projects/ProjectItem";
import path from "path";
import { readFileSync } from "fs";

export default function ProjectPage({ project }) {
  return <Project project={project} />;
}

export async function getStaticProps(context) {
  const pathName = path.join(process.cwd(), "store", "projects.json");
  const data = JSON.parse(readFileSync(pathName, "utf8"));

  return {
    props: {
      project: data.find((p) => p.slug === context.params.slug),
    },
  };
}

export async function getStaticPaths() {
  const pathName = path.join(process.cwd(), "store", "projects.json");
  const data = JSON.parse(readFileSync(pathName, "utf8"));

  const paths = data.map((p) => ({
    params: { slug: p.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

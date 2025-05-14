import './Section.css';

interface SectionProps {
  id: string;
  title: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{content}</div>
    </section>
  );
};

export default Section;
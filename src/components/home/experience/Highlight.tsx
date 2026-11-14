import ImgCarousel from '@/components/home/img-carousel/ImgCarousel';
import { ProjectTitle, ProjectTags } from '@/components/home/projects/StyledProjects';
import { StyledHighlight } from './StyledExperience';
import type { Highlight as HighlightData } from '@/types';

interface HighlightProps {
  highlight: HighlightData;
  color: string;
}

const Highlight = ({ highlight, color }: HighlightProps) => {
  const { title, summary, impact = [], tags = [], images = [] } = highlight;

  return (
    <StyledHighlight>
      {(images.length > 0) && <ImgCarousel images={images} color={color} wide />}

      <div className='highlight-overview'>
        <ProjectTitle $color={color}>{title}</ProjectTitle>

        <p>{summary}</p>

        {(impact.length > 0) && (
          <ul className='highlight-impact'>
            {impact.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}

        {(tags.length > 0) && (
          <ProjectTags $color={color}>
            {tags.map((tag) =>
              <span key={tag.text}>
                {tag.icon}
                {tag.text}
              </span>
            )}
          </ProjectTags>
        )}
      </div>
    </StyledHighlight>
  );
};

export default Highlight;

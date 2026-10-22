import ImgCarousel from '../img-carousel/ImgCarousel';
import { ProjectTitle, ProjectTags } from '../projects/StyledProjects';
import { StyledHighlight } from './StyledExperience';

const Highlight = ({ highlight, color }) => {
  const { title, summary, impact = [], tags = [], images = [] } = highlight;

  return (
    <StyledHighlight>
      {(images.length > 0) && <ImgCarousel images={images} color={color} wide />}

      <div className='highlight-overview'>
        <ProjectTitle color={color}>{title}</ProjectTitle>

        <p>{summary}</p>

        {(impact.length > 0) && (
          <ul className='highlight-impact'>
            {impact.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}

        {(tags.length > 0) && (
          <ProjectTags color={color}>
            {tags.map((tag, i) =>
              <span key={i}>
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

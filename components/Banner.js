import Dots from './Icons/dots';
const hasDots = (props) => {
  if (props.dots) {
    const HeadingLevel = `${props.headingLevel}`;
    return (
      <>
        <style jsx>
          {`
            .banner {
              background-color: ${props.bgColor};
              border-radius: var(--border-radius);
              height: ${props.height};
              width: ${props.width};
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            ${props.headingLevel} {
              color: ${props.color};
              text-transform: uppercase;
            }
          `}
        </style>

        <div className={`banner ${props.margin}`}>
          <Dots direction={'right'} color={props.color} size={'10'} />
          <HeadingLevel>{props.text}</HeadingLevel>
          <Dots direction={'left'} color={props.color} size={'10'} />
        </div>
      </>
    );
  } else {
    const HeadingLevel = `${props.headingLevel}`;
    return (
      <>
        <style jsx>
          {`
            .banner {
              background-color: ${props.bgColor};
              border-radius: var(--border-radius);
              height: ${props.height};
              width: ${props.width};
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            ${props.headingLevel} {
              color: ${props.color};
              text-transform: uppercase;
            }
          `}
        </style>
        <div className={`banner ${props.margin}`}>
          <HeadingLevel>{props.text}</HeadingLevel>
        </div>
      </>
    );
  }
};
const Banner = (props) => <>{hasDots(props)}</>;

export default Banner;

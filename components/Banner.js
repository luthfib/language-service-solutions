import Dots from './Icons/dots';
const hasDots = (props) => {
  if (props.dots) {
    const HeadingLevel = `${props.headingLevel}`;
    return (
      <>
        <style jsx>
          {`
            .banner {
              background: ${props.bgColor};
              border-radius: var(--border-radius-mobile);
              height: ${props.bgColor? props.height : 'unset'};
              width: ${props.width};
              display: flex;
              justify-content: space-around;
              align-items: center;
              box-shadow: var(--elevation-3);
              padding: 0 10px;
            }

            ${props.headingLevel} {
              color: ${props.color};
              text-transform: uppercase;
              text-align: center;
              padding: 0 5px;
              margin: 0;
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
              background: ${props.bgColor};
              border-radius: var(--border-radius-mobile);
              height:${props.bgColor? props.height : 'unset'};
              width: ${props.width};
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            ${props.headingLevel} {
              color: ${props.color};
              text-transform: uppercase;
              text-align: center;
              margin: 0;
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

import Dots from './Icons/dots';
const hasDots = (props) => {
  if (props.dots) {
    return (
      <>
        <style jsx>
          {`
            .banner {
              background-color: ${props.bgColor};
              border-radius: var(--border-radius);
              height: ${props.height};
              width: 90%;
              display: flex;
              justify-content: space-around;
            }

            h2 {
              color: ${props.color};
              text-transform: uppercase;
            }
          `}
        </style>

        <div className={`banner ${props.margin}`}>
          <Dots direction={'right'} color={props.color} size={'10'} />
          <h2>{props.text}</h2>
          <Dots direction={'left'} color={props.color} size={'10'} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <style jsx>
          {`
            .banner {
              background-color: ${props.bgColor};
              border-radius: var(--border-radius);
              height: ${props.height};
              width: 90%;
              display: flex;
              justify-content: space-around;
            }

            h2 {
              color: ${props.color};
            }
          `}
        </style>
        <div className={`banner ${props.margin}`}>
          <h2>{props.text}!</h2>
        </div>
        ;
      </>
    );
  }
};
const Banner = (props) => <>{hasDots(props)}</>;

export default Banner;

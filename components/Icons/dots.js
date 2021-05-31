// The dots can go in all 4 directions and its size can also be dinamically set through props
const Dots = ({direction, size, color = 'var(--yellow)'}) => {
  return (
    <>
      <div className={`dots ${direction}`}>
        <span className='dot'></span>
        <span className='dot medium'></span>
        <span className='dot small'></span>
      </div>
      <style jsx>
        {`
          .dots {
              --size  ${size}px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dots.up {
            flex-flow: column;
          }
          .dots.down {
            flex-flow: column-reverse;
          }
          .dots.right {
            flex-flow: row-reverse;
          }
          .dots.left {
            flex-flow: row;
          }

          .dot {
            height: var(--size);
            width:  var(--size);
            background: ${color};
            position: relative;
            border-radius: 50%;
          }
          .dot.medium {
            height:  calc(var(--size) - (var(--size) / 5));
            width:  calc(var(--size) - (var(--size) / 5));
          }
          .dot.small {
            height:  calc(var(--size) - (var(--size) / 2));
            width:  calc(var(--size)  - (var(--size) / 2));
          }

          .up .dot:not(:first-of-type) {
            margin-top:  calc(var(--size) /7);
          }
          .down .dot:not(:last-of-type) {
            margin-top:  calc(var(--size) /7);
          }
          .right .dot:not(:first-of-type) {
            margin-right:  calc(var(--size) /7);
          } 
          .left .dot:not(:last-of-type) {
            margin-right:  calc(var(--size) /7);
          } 
        `}
      </style>
    </>
  );
};

export default Dots;

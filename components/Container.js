const Container = ({ children, background }) => (
  <>
    <div className="flex flex-col w-full justify-center items-center">
      <div className="inner-container">{children}</div>
    </div>
    <style jsx>{`
      .inner-container {
        background: ${background || "var(--primary-medium)"};
        border-radius: var(--border-radius);
        width: var(--element-width);
        padding: var(--element-padding);
        box-shadow: var(--elevation-3-wheat);
        display: flex;
        flex-flow: column;
        font-weight: bold;
      }
    `}</style>
  </>
);

export default Container;

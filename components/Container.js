const Container = ({ children, background }) => (
  <>
    <div className="container">
      <div className="inner-container">{children}</div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
      }

      .inner-container {
        background: ${background || "var(--primary-medium)"};
        border-radius: var(--border-radius);
        width: 90%;
        padding: 40px 40px;
        box-shadow: var(--shadow-primary-medium);
        display: flex;
        flex-flow: column;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        .inner-container {
          padding: 40px 30px;
          width: 100%;
        }
      }
    `}</style>
  </>
);

export default Container;

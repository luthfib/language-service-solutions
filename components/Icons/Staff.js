const StaffIcon = ({ path, staffName }) => {
  return (
    <>
      <img src={path} alt={staffName} className={"staff-img"} />
      <style jsx>{`
        .staff-img {
          height: 225px;
          width: 100%;
        }
      `}</style>
    </>
  );
};
export default StaffIcon;

'use client';

interface StaffIconProps {
    path: string;
    staffName: string;
}

const StaffIcon = ({ path, staffName }: StaffIconProps) => {
    return (
        <img
            width={225}
            height={225}
            src={path}
            alt={staffName}
            className="h-[225px] w-full"
        />
    );
};

export default StaffIcon;


import IconWrapper from "./IconWrapper";

function BottomNavBar() {
    return (
        <div className="main-div h-fit! border-b-0! border-x-0! rounded-b-none! relative [&_i]:text-[var(--text-secondary)] [&_a]:hover:[&>i]:text-[var(--logo)] shrink-0">
            <div className="flex justify-between flex-1 items-center">
                <div className="flex flex-1 justify-evenly">
                    <a href=""><i className="fa-solid fa-home fa-lg"></i></a>
                    <a href=""><i className="fa-solid fa-list fa-lg"></i></a>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-1 border-6 rounded-full border-[var(--bg-card)] [&_div]:w-10 [&_div]:h-10">
                    <IconWrapper
                        icon={`fa-solid fa-plus fa-lg`}
                        iconColor={`text-white!`}
                        color={`bg-[var(--logo)]`}
                        rounded={`rounded-full`}
                    />
                </div>
                <div className="flex flex-1 justify-evenly">
                    <a href=""><i className="fa-solid fa-chart-simple fa-lg"></i></a>
                    <a href=""><i className="fa-solid fa-user fa-lg"></i></a>
                </div>
            </div>
        </div>
    );
}

export default BottomNavBar;
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { PiMoneyLight } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";

const CustomerBenifit = () => {
    const features = [
        {
            id : "1",
            logo:<LiaShippingFastSolid/>,
            title:"Free Shipping",
            des:"Free Shipping on all order"
        },
        {
            id : "2",
            logo:<BiSupport/>,
            title:"Support 24/7",
            des:"Free Shipping on all order"
        },
        {
            id : "3",
            logo:<PiMoneyLight/>,
            title:"Money Return",
            des:"Free Shipping on all order"
        },
        {
            id : "4",
            logo:<CiDiscount1/>,
            title:"Order Discount",
            des:"Free Shipping on all order"
        },
    ]
    return (
        <div className="px-10 md:px-20 py-10 md:py-20 block md:flex gap-16 md:justify-center">
            {
                features.map((item)=>{
                    return(
                    <div className="py-2 md:py-0">
                        <div className="flex justify-center items-center gap-3">
                            <span className="text-5xl">
                                {item.logo}
                            </span>
                            <div>
                                <h1 className="text-xl">{item.title}</h1>
                                <p className="text-slate-500 text-sm">{item.des}</p>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default CustomerBenifit;
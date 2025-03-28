import { useFormik } from "formik";
import { useRef, useState } from "react";
import { toast } from "react-toastify"; // Add toast notification if needed
import Spinner from "../../shared/Spinner/Spinner"; // Spinner for loading state
import { create } from "../../../services/SliderService";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { handleFetchData } from "../../../redux/SliderDataSlice";

const Slider = () => {

    const dispatch = useDispatch();

    const sliders = useSelector(state => state.SliderDataSlice.data)

    const [bannerView, setBannerView] = useState([null, null, null, null, null, null, null]);
    const [isLoading, setIsLoading] = useState(false);
    const imageRefs = useRef([]); // To manage refs for multiple inputs

    const form = useFormik({
        initialValues: {
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        image6: null,
        image7: null,
        },
        onSubmit: async (values) => {
        const formData = new FormData();

        // Append images to the FormData
        Object.keys(values).forEach((key, index) => {
            // Check if the image exists in initialValues or is newly uploaded
            if (values[key] || form.initialValues[key]) {
                formData.append(key, values[key] || form.initialValues[key]);
            }
        });

        setIsLoading(true);
        try {
            const response = await create(formData); 
            if (response.success) {
                toast.success("Sliders updated successfully!");
                setIsLoading(false);
                dispatch(handleFetchData(response?.data))
            } else {
                toast.error("Failed to update the slider!");
                setIsLoading(false);
            }
        } catch (error) {
            toast.error("An error occurred while saving the slider!");
        } finally {
            setIsLoading(false);
        }
        },
    });

    useEffect(() => {
        if (sliders && Object.keys(sliders).length > 0) {
            const updatedBannerView = new Array(7).fill(null); // Initialize an array of length 7 with nulls
            sliders.forEach((value, index) => {
                if (index < 7) {
                    updatedBannerView[index] = value.url; // Fill in the URLs from the server
                }
            });
            setBannerView(updatedBannerView); // Update the state with the new array
        }
    }, [sliders])

    const bannerUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
        // Set the file in Formik's state
        form.setFieldValue(`image${index + 1}`, file);

        // Generate preview
        const reader = new FileReader();
        reader.onload = () => {
            const updatedBanners = [...bannerView];
            updatedBanners[index] = reader.result; // Update the preview
            setBannerView(updatedBanners);
        };
        reader.readAsDataURL(file);
        }
    };

    const Cards = ({ index, value }) => {
        return (
        <div className="card">
            <input
            type="file"
            ref={(el) => (imageRefs.current[index] = el)}
            onChange={(e) => bannerUpload(e, index)}
            className="hide-me"
            />
            <div className="card-header pt-4 pb-2">
            <h5>Image {index + 1}</h5>
            </div>
            <div className="card-body flex-cs py-2">
            <div onClick={() => imageRefs.current[index]?.click()} className="slider-img my-3 flex-cs">
                {value ? (
                <img src={value} alt={`Image ${index + 1}`} />
                ) : (
                <i className="fa-solid fa-plus fa-2xl" />
                )}
            </div>
            </div>
        </div>
        );
    };

    return (
        <>
        <div className="container-fluid">
            <form onSubmit={form.handleSubmit}>
            <div className="row">
                <div className="col-md-12">
                <div className="flex-cs header p-3">
                    <h3>Slider</h3>
                    <button className="btn btn-primary btn-lg" type="submit" disabled={isLoading}>
                    <i className="fa-solid fa-floppy-disk" /> &nbsp; Save {isLoading && <Spinner />}
                    </button>
                </div>

                <div className="main-slider-layout">
                    {bannerView.map((value, index) => (
                    <Cards key={index} index={index} value={value} />
                    ))}
                </div>
                </div>
            </div>
            </form>
        </div>
        </>
    );
};

export default Slider;

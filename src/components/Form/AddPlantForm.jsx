import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AddPlantForm = ({
  handleSubmit,
  uploadImage,
  setUploadImage,
  loading,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lightBlue focus:outline-lightBlue rounded-md bg-white"
                name="name"
                id="name"
                type="text"
                placeholder="Plant Name"
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-lightBlue focus:outline-lightBlue rounded-md bg-white"
                name="category"
              >
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Succulent">Succulent</option>
                <option value="Flowering">Flowering</option>
              </select>
            </div>

            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                placeholder="Write plant description here..."
                className="block rounded-md w-full h-32 px-4 py-3 text-gray-800  border border-lightBlue bg-white focus:outline-lightBlue"
                name="description"
                minLength={320}
                required
              ></textarea>
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            {/* Price & Quantity */}
            <div className="flex justify-between gap-2">
              {/* Price */}
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lightBlue outline-lightBlue focus:outline-lightBlue rounded-md bg-white"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price per unit"
                  required
                />
              </div>

              {/* Quantity */}
              <div className="space-y-1 text-sm">
                <label htmlFor="quantity" className="block text-gray-600">
                  Quantity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lightBlue focus:outline-lightBlue rounded-md bg-white"
                  name="quantity"
                  id="quantity"
                  type="number"
                  placeholder="Available quantity"
                  required
                />
              </div>
            </div>
            {/* Image */}
            <div className="p-4 w-full m-auto rounded-lg flex-grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) => setUploadImage(e.target.files[0])}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                      required
                    />
                    <div className="bg-lightBlue text-black rounded cursor-pointer p-1 px-3">
                      {uploadImage?.name}
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {uploadImage && uploadImage?.size && (
              <div className="flex justify-center items-center gap-4">
                <img
                  src={URL.createObjectURL(uploadImage)}
                  alt="uploaded image"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p>
                  Image Size: {(uploadImage.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className=" flex gap-2 items-center justify-center py-2.5 text-center font-medium text-black transition duration-200 rounded shadow-md bg-lightBlue"
            >
              <AiOutlineLoading3Quarters
                className={loading ? "animate-spin" : "hidden"}
              />
              {loading ? "Saving..." : "Save & Continue"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddPlantForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  uploadImage: PropTypes.object.isRequired,
  setUploadImage: PropTypes.func.isRequired,
};

export default AddPlantForm;

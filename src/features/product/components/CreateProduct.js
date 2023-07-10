import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { postProductsAsync, selectAllProducts } from "../productSlice";
function CreateProduct(props) {
  const dispatch = useDispatch();
  const [preview, setShowPreview] = useState();
  const product = useSelector(selectAllProducts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleDispatch = (data) => {
    dispatch(postProductsAsync(data));
  };

  const showPreview = async (dataItem) => {
    setShowPreview(dataItem);
    // await handleDispatch(dataItem);
  };
  const base_url = process.env.REACT_APP_BASE_URL

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        <div className="grid p-5 grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              className="bg-white px-5 py-12 mt-12"
              noValidate
              onSubmit={handleSubmit(async (data) => showPreview(data))}
            >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Product Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Enter necessary Product Information
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Product name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          {...register("title", {
                            required: "Name is required",
                          })}
                          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="mt-2">
                        <input
                          id="description"
                          name="description"
                          type="text"
                          {...register("description", {
                            required: "Description is required",
                          })}
                          className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2">
                        <input
                          id="price"
                          name="price"
                          type="number"
                          {...register("price", {
                            required: "price is required",
                          })}
                          className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Image
                      </label>
                      <div className="mt-2">
                        <input
                          id="image"
                          name="image"
                          type="file"
                          {...register("image", {
                            required: "image is required",
                          })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="mx-auto bg-white max-w-5xl px-3 sm:px-3 lg:px-3">
              <div className="mt-8 border-t border-gray-200 px-0 py-3 sm:px-0">
                <h1 className="text-4xl my-4 font-bold tracking-tight text-gray-900">
                  Product Preview
                </h1>
              </div>

              <div className="border-t border-gray-200 px-3 py-3 sm:px-3">
              {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={`${base_url}/${preview.image}`}
                            alt={preview.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div> */}
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Name</p>
                  <p>{preview ? preview.title : "N/A"}</p>
                </div>  
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Description</p>
                  <p>{preview?preview.description : "N/A"}</p>
                </div>
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                  <p>Price</p>
                  <p>${preview?preview.price: "N/A"}</p>
                </div>

                <div className="mt-6">
                  <div className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={()=>dispatch(postProductsAsync(preview))}>
                    Add Product
                  </div>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <Link to="admin/preview">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Preview Products
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;

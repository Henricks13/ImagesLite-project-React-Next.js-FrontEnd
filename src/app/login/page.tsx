'use client'

import { Template, RenderIf, InputText,Button, FieldError } from "@/components"
import { useState } from "react"
import { loginForm, formScheme, validationScheme } from "./formScheme"
import { useFormik } from "formik"

export default function login(){

    const [loading, setLoading] = useState<boolean>(false)
    const [newUserState , setNewUserState] = useState<boolean>(true)

    const { values, handleChange, handleSubmit, errors} = useFormik<loginForm>({
        initialValues: formScheme,
        validationSchema: validationScheme,
        onSubmit: onSubmit
    });

    async function onSubmit(values: loginForm){
        console.log(values)
    }


    return(
        <Template  loading={loading}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-1x1 font-bold leading-9 tracling-tight text-gray-900">
                        { newUserState ? "Created New User" : "Login to Your Account" }
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-1m ">
                    <form onSubmit={handleSubmit} className="space-y-2" action="">
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className="block text-sm dont-medium leading-6 text-gray-900" htmlFor="">Name:</label>
                            </div>

                            <div className="mt-2">
                                <InputText style="w-full" 
                                           id="name"
                                           value={values.name}
                                           onChange={handleChange}
                                           />
                                <FieldError error={errors.name} />
                            </div>
                        </RenderIf>

                        <div>
                                <label className="block text-sm dont-medium leading-6 text-gray-900" htmlFor="">Email:</label>
                            </div>

                            <div className="mt-2">
                                <InputText style="w-full" 
                                           id="email"
                                           value={values.email}
                                           onChange={handleChange}
                                           />
                                <FieldError error={errors.email} />
                            </div>

                            <div>
                                <label className="block text-sm dont-medium leading-6 text-gray-900" htmlFor="">Password:</label>
                            </div>

                            <div className="mt-2">
                                <InputText style="w-full" 
                                           id="password"
                                           type="password"
                                           value={values.password}
                                           onChange={handleChange}
                                           />
                                <FieldError error={errors.password} />
                            </div>

                            <RenderIf condition={newUserState}>
                                <div>
                                    <label className="block text-sm dont-medium leading-6 text-gray-900" htmlFor="">Repeat Password:</label>
                                </div>

                                <div className="mt-2">
                                <InputText style="w-full" 
                                            id="passwordMatch"
                                            type="password"
                                            value={values.passwordMatch}
                                           onChange={handleChange}
                                            />
                                <FieldError error={errors.passwordMatch} />
                                            
                                </div>
                            </RenderIf>

                            <div>
                                <RenderIf condition={newUserState}>
                                    <Button type="submit" 
                                            style="bg-indigo-700 hover:bg-indigo-500" 
                                            label="Save"/>

                                    <Button type="button" 
                                            style="bg-red-700 hover:bg-red-500 mx-2" 
                                            label="Cancel"
                                            onClick={event => setNewUserState(false)}/>
                                </RenderIf>

                                <RenderIf condition={!newUserState}>
                                    <Button type="button" 
                                            style="bg-indigo-700 hover:bg-indigo-500" 
                                            label="Login"/>

                                    <Button type="button" 
                                            style="bg-red-700 hover:bg-red-500 mx-2" 
                                            label="Sign Up" 
                                            onClick={event => setNewUserState(true)}/>
                                </RenderIf>

                            </div>

                    </form>
                </div>

            </div>
        </Template>
    )
}
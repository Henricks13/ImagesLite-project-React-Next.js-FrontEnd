'use client'

import { Template, RenderIf, InputText } from "@/components"
import { useState } from "react"

export default function login(){

    const [loading, setLoading] = useState<boolean>(false)
    const [newUserState , setNewUserState] = useState<boolean>(true)

    return(
        <Template  loading={loading}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-1x1 font-bold leading-9 tracling-tight text-gray-900">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-1m ">
                    <form className="space-y-6" action="">
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className="block text-sm dont-medium leading-6 text-gray-900" htmlFor="">Name:</label>
                            </div>

                            <div className="mt-2">
                                <InputText style="w-full" 
                                           id="name"
                                           />
                            </div>
                        </RenderIf>

                        <div>
                                <label className="block text-sm dont-medium leading-6 text-gray-900" htmlFor="">Email:</label>
                            </div>

                            <div className="mt-2">
                                <InputText style="w-full" 
                                           id="email"
                                           />
                            </div>

                            <div>
                                <label className="block text-sm dont-medium leading-6 text-gray-900" htmlFor="">Password:</label>
                            </div>

                            <div className="mt-2">
                                <InputText style="w-full" 
                                           id="password"
                                           type="password"
                                           />
                            </div>

                            <RenderIf condition={newUserState}>
                                <div>
                                    <label className="block text-sm dont-medium leading-6 text-gray-900" htmlFor="">Repeat Password:</label>
                                </div>

                                <div className="mt-2">
                                <InputText style="w-full" 
                                            id="passwordMatch"
                                            type="password"
                                            />
                                            
                                </div>
                            </RenderIf>

                    </form>
                </div>

            </div>
        </Template>
    )
}
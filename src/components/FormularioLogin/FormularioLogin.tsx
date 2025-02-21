"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { loginSchema } from "@/schema/loginSchema"
import { toast } from "sonner"



type LoginData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  const onSubmit = (data: LoginData) => {
    try{
        console.log("Dados do formulário:", data)
        toast.success('Login Realizado')
  } catch (error) {
    toast.error("Cadastro não realizado")
  }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm md:max-w-md lg:max-w-lg mx-auto w-full px-4">
        <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-8">Seja bem-vindo!</h1>

        {/* Campo Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5">
              <Label htmlFor="email">Email</Label>
              <FormControl>
                <Input id="email" type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo Senha */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-5">
              <Label htmlFor="password">Senha</Label>
              <FormControl>
                <Input id="password" type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Lembrar senha + Esqueci a senha */}
        <div className="flex items-center justify-between gap-2 sm:gap-0 mb-5">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormControl>
                  <Checkbox id="remember" checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <Label htmlFor="remember" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                  Lembrar senha
                </Label>
              </FormItem>
            )}
          />
          <a href="#" className="text-sm text-blue-400 hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        {/* Botão de login */}
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  )
}

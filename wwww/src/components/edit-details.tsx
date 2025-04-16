import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

const formDetails = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
})

export const EditDetails = () => {
  const form = useForm({
    resolver: zodResolver(formDetails),
  })
  const onSubmit = () => {}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>Name</FormLabel>
              <FormControl>
                <Input placeholder='name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>Description</FormLabel>
              <FormControl>
                <Textarea
                  maxLength={200}
                  rows={4}
                  className='resize-none'
                  placeholder='description'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-end'>
          <Button type='submit'>Save</Button>
        </div>
      </form>
    </Form>
  )
}

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
import { useUpdatePlaylist } from "@/hooks/queries/usePlaylists"

const formDetails = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
})

interface EditDetailsProps {
  edited?: VoidFunction
  defaultValues?: z.infer<typeof formDetails>
  playlistId: string
}
export const EditDetails = ({
  playlistId,
  edited,
  defaultValues,
}: EditDetailsProps) => {
  const { mutate } = useUpdatePlaylist()
  const form = useForm({
    resolver: zodResolver(formDetails),
    defaultValues: defaultValues ?? {
      description: "",
      name: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formDetails>) => {
    mutate(
      { playlistId, ...values },
      {
        onSuccess: () => {
          edited?.()
        },
      }
    )
  }

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
          <Button onClick={form.handleSubmit(onSubmit)}>Save</Button>
        </div>
      </form>
    </Form>
  )
}

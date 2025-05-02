import { SignUpForm } from "@/components/sign-up-form"

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create Your Profile</h1>
      <p className="text-lg mb-8">
        Join our community of fashion designers and boutiques. Fill out the form below to create your profile.
      </p>
      <SignUpForm />
    </div>
  )
}

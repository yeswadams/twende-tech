import React from "react";
import TestimonialCard from "./testimonalCard"


const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Alice Kimanzi",
      title: "Software Developer",
      testimonial: "TwendeTech has transformed my career. The mentorship and guidance they provide have been invaluable. They helped me find my dream job and made me a more successful developer.",

    },

    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Ezra Kotuvo",
      title: "Software Developer",
      testimonial: "TwendeTech has transformed my career. The mentorship and guidance they provide have been invaluable. They helped me find my dream job and made me a more successful developer.",

    },

    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Kimani Jonstone",
      title: "Software Developer",
      testimonial: "TwendeTech has transformed my career. The mentorship and guidance they provide have been invaluable. They helped me find my dream job and made me a more successful developer.",

    },

    {
      id: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Willian Otieno",
      title: "Software Developer",
      testimonial: "TwendeTech has transformed my career. The mentorship and guidance they provide have been invaluable. They helped me find my dream job and made me a more successful developer.",

    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Willian Otieno",
      title: "Software Developer",
      testimonial: "TwendeTech has transformed my career. The mentorship and guidance they provide have been invaluable. They helped me find my dream job and made me a more successful developer.",

    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Willian Otieno",
      title: "Software Developer",
      testimonial: "TwendeTech has transformed my career. The mentorship and guidance they provide have been invaluable. They helped me find my dream job and made me a more successful developer.",

    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Willian Otieno",
      title: "Software Developer",
      testimonial: "TwendeTech has transformed my career. The mentorship and guidance they provide have been invaluable. They helped me find my dream job and made me a more successful developer.",

    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Willian Otieno",
      title: "Software Developer",
      testimonial: "TwendeTech has transformed my career. The mentorship and guidance they provide have been invaluable. They helped me find my dream job and made me a more successful developer.",

    },

  ];
  
  return (
    <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">What People Are <br/>Saying.</h2>
      <div className="container flex flex-col items-start mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
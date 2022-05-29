import { testimonials } from "@home/constants";
import Image from "@shared/components/atoms/Image";
import Text from "@shared/components/atoms/Text";
import Title from "@shared/components/atoms/Title";
import { AvatarPlaceholder, TestimonialCard, TestimonialContent, TestimonialHeader, TestimonialOverflow } from "./styles";

export default function Testimonials() {
  return (
    <article>
      <TestimonialContent>
        <TestimonialOverflow>
          {testimonials.map(testimonial => {
            return (
              <TestimonialCard key={testimonial.id}>
                <TestimonialHeader>
                  <figure>
                    {testimonial.image ?
                      <Image src={testimonial.image} alt={testimonial.name} /> :
                      <AvatarPlaceholder>{testimonial.name.charAt(0)}</AvatarPlaceholder>
                    }
                  </figure>
                  <Title variant="h3" hstyle="h6">{testimonial.name}</Title>
                </TestimonialHeader>
                <Text size="small">{testimonial.content}</Text>
              </TestimonialCard>
            )
          })}
        </TestimonialOverflow>
      </TestimonialContent>
    </article>
  )
}
package br.com.seumei.controller;

import br.com.seumei.dto.LeadRequest;
import br.com.seumei.model.Lead;
import br.com.seumei.repository.LeadRepository;
import br.com.seumei.repository.ServiceItemRepository;
import br.com.seumei.repository.TestimonialRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PublicController {

    private final ServiceItemRepository serviceItemRepository;
    private final TestimonialRepository testimonialRepository;
    private final LeadRepository leadRepository;

    @GetMapping("/services")
    public List<?> getServices() {
        return serviceItemRepository.findAll();
    }

    @GetMapping("/testimonials")
    public List<?> getTestimonials() {
        return testimonialRepository.findAll();
    }

    @PostMapping("/leads")
    @ResponseStatus(HttpStatus.CREATED)
    public Lead createLead(@Valid @RequestBody LeadRequest request) {
        Lead lead = Lead.builder()
                .name(request.name())
                .email(request.email())
                .phone(request.phone())
                .serviceInterest(request.serviceInterest())
                .message(request.message())
                .createdAt(LocalDateTime.now())
                .build();

        return leadRepository.save(lead);
    }
}

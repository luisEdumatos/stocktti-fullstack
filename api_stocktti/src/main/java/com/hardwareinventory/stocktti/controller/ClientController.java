package com.hardwareinventory.stocktti.controller;

import com.hardwareinventory.stocktti.dto.request.ClientDTO;
import com.hardwareinventory.stocktti.dto.request.ClientHardwareDTO;
import com.hardwareinventory.stocktti.dto.response.MessageResponseDTO;
import com.hardwareinventory.stocktti.exception.ClientNotFoundException;
import com.hardwareinventory.stocktti.exception.HardwareNotFoundException;
import com.hardwareinventory.stocktti.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/client")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ClientController {

    private ClientService clientService;

    //@CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MessageResponseDTO createClient(@RequestBody @Valid ClientDTO clientDTO) {
        return clientService.createClient(clientDTO);
    }

   // @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<ClientDTO> listAll() {
        return clientService.listAll();
    }

    //@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public ClientHardwareDTO findById(@PathVariable Long id) throws ClientNotFoundException {
        return clientService.findById(id);
    }

   // @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/{id}")
    public MessageResponseDTO updateById(@PathVariable Long id, @RequestBody @Valid ClientDTO clientDTO) throws ClientNotFoundException {
        return clientService.updateById(id, clientDTO);
    }

    //@CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) throws ClientNotFoundException, HardwareNotFoundException {
        clientService.delete(id);
    }
}

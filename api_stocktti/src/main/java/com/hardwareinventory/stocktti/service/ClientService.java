package com.hardwareinventory.stocktti.service;

import com.hardwareinventory.stocktti.dto.mapper.ClientHardwareMapper;
import com.hardwareinventory.stocktti.dto.mapper.ClientMapper;
import com.hardwareinventory.stocktti.dto.request.ClientDTO;
import com.hardwareinventory.stocktti.dto.request.ClientHardwareDTO;
import com.hardwareinventory.stocktti.dto.response.MessageResponseDTO;
import com.hardwareinventory.stocktti.entity.Client;
import com.hardwareinventory.stocktti.exception.ClientNotFoundException;
import com.hardwareinventory.stocktti.exception.HardwareNotFoundException;
import com.hardwareinventory.stocktti.repository.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ClientService {
    private ClientRepository clientRepository;
    private final ClientMapper clientMapper = ClientMapper.INSTANCE;
    private final ClientHardwareMapper clientHardwareMapper = ClientHardwareMapper.INSTANCE;

    public MessageResponseDTO createClient(ClientDTO clientDTO) {
        Client clientToSave = clientMapper.toModel(clientDTO);
        Client savedClient = clientRepository.save(clientToSave);
        return createMessageResponse(savedClient.getId(), "Created client with ID ");
    }

    public List<ClientDTO> listAll() {
        List<Client> allClients = clientRepository.findAll();
        return allClients.stream()
                .map(clientMapper::toDTO)
                .collect(Collectors.toList());
    }

    public ClientHardwareDTO findById(Long id) throws ClientNotFoundException {
        Client client = verifyExists(id);
        return clientHardwareMapper.toDTO(client);
    }

    public void delete(Long id) throws ClientNotFoundException, HardwareNotFoundException {
        verifyExists(id);
        clientRepository.deleteById(id);
    }

    public MessageResponseDTO updateById(Long id, ClientDTO clientDTO) throws ClientNotFoundException {
        verifyExists(id);
        clientDTO.setId(id); //Evita passagem de ID errado pelo corpo do JSON
        Client clientToUpdate = clientMapper.toModel(clientDTO);
        Client updatedClient = clientRepository.save(clientToUpdate);
        return createMessageResponse(updatedClient.getId(), "Updated client with ID ");
    }

    private Client verifyExists(Long id) throws ClientNotFoundException {
        Optional<Client> optionalClient = clientRepository.findById(id);
        if (optionalClient.isEmpty()) {
            throw new ClientNotFoundException(id);
        }
        return optionalClient.get();
    }

    private MessageResponseDTO createMessageResponse(Long id, String msg) {
        return MessageResponseDTO
                .builder()
                .message(msg + id)
                .build();
    }
}

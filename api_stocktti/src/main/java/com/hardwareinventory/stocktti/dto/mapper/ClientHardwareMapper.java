package com.hardwareinventory.stocktti.dto.mapper;

import com.hardwareinventory.stocktti.dto.request.ClientHardwareDTO;
import com.hardwareinventory.stocktti.entity.Client;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ClientHardwareMapper {

    ClientHardwareMapper INSTANCE = Mappers.getMapper(ClientHardwareMapper.class);

    Client toModel(ClientHardwareDTO clientHardwareDTO);

    ClientHardwareDTO toDTO(Client client);
}

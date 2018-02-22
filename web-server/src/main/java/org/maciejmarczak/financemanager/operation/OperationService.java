package org.maciejmarczak.financemanager.operation;

import org.maciejmarczak.financemanager.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class OperationService {

    private final OperationRepository operationRepository;

    @Autowired
    OperationService(OperationRepository operationRepository) {
        this.operationRepository = operationRepository;
    }

    Operation addOperation(Operation operation) {
        return operationRepository.save(operation);
    }

    List<Operation> getAllOperationsByIssuer(User issuer) {
        return operationRepository.getAllByIssuerId(issuer.getId());
    }
}

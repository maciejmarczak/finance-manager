package org.maciejmarczak.financemanager.operation;

import org.maciejmarczak.financemanager.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OperationService {

    private final OperationRepository operationRepository;

    @Autowired
    public OperationService(OperationRepository operationRepository) {
        this.operationRepository = operationRepository;
    }

    public Operation addOperation(Operation operation) {
        return operationRepository.save(operation);
    }

    public List<Operation> getAllOperationsByIssuer(User user) {
        return operationRepository.getAllByIssuerId(user.getId());
    }
}

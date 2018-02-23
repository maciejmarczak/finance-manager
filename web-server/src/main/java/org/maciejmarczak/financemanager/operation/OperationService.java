package org.maciejmarczak.financemanager.operation;

import org.maciejmarczak.financemanager.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class OperationService {

    private final OperationRepository operationRepository;

    @Autowired
    public OperationService(OperationRepository operationRepository) {
        this.operationRepository = operationRepository;
    }

    public Operation addOperation(Operation operation) {
        return operationRepository.save(operation);
    }

    public void deleteOperationById(User issuer, int id) {
        operationRepository.deleteByIssuerIdAndId(issuer.getId(), id);
    }

    public List<Operation> getAllOperationsByIssuer(User issuer) {
        return operationRepository.getAllByIssuerId(issuer.getId());
    }
}

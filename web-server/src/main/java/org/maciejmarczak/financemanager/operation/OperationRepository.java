package org.maciejmarczak.financemanager.operation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface OperationRepository extends JpaRepository<Operation, Integer> {
    List<Operation> getAllByIssuerId(Integer issuerId);
    void deleteByIssuerIdAndId(Integer id, Integer issuerId);
}

package org.maciejmarczak.financemanager.operation;

import org.springframework.data.jpa.repository.JpaRepository;

interface OperationRepository extends JpaRepository<Operation, Long> {}
